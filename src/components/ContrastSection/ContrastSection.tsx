import { PropsWithChildren } from "react";
import { Text } from "@components/Text/Text";
import classes from "./ContrastSection.module.css";

interface Props extends PropsWithChildren {
  title?: string;
}

export const ContrastSection = ({ children, title }: Props) => {
  return (
    <section className={classes.contrast_section}>
      <header className={classes.contrast_section_header}>
        <Text weight="bold" customClasses={`${classes.contrast_section_text}`}>
          {title}
        </Text>
      </header>
      <div className={classes.contrast_section_content}>{children}</div>
    </section>
  );
};
