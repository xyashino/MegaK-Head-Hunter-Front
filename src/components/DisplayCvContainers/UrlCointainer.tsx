import attachSvg from "@assets/attach_file.svg";
import { LinkWithIcon } from "@components/LinkWithIcon/LinkWithIcon";
import classes from "./DisplayCvContainers.module.css";

interface Props {
  title: string;
  array: string[];
}

export const UrlContainer = ({ title, array }: Props) => {
  return (
    <div>
      <div className={classes.title_gutter}>{title}</div>
      {array.length !== 0
        ? array.map((link, index) => (
            <LinkWithIcon
              to={link}
              text={link}
              icon={attachSvg}
              style={{ padding: "1.5rem 1.5rem 0.5rem" }}
              key={crypto.randomUUID()}
            />
          ))
        : null}
    </div>
  );
};
