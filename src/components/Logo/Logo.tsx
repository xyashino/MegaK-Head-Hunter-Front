import img from "@assets/logo.png";
import { PageRouter } from "@enums/page-router.enum";
import { HTMLAttributes, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Logo.module.css";

interface Props extends HTMLAttributes<HTMLImageElement> {
  customClasses?: string;
  navigateToMain?: true;
}

export const Logo = ({
  customClasses = "",
  navigateToMain,
  ...rest
}: Props) => {
  const navigate = useNavigate();
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    navigateToMain && navigate(PageRouter.Main);
  };
  return (
    <div
      className={`${classes.div_img_wrapper} ${customClasses}`}
      {...rest}
      onClick={handleClick}
    >
      <img
        className={classes.img_logo}
        src={img}
        alt="Logo kursu MegaK"
        {...rest}
        draggable={false}
      />
    </div>
  );
};
