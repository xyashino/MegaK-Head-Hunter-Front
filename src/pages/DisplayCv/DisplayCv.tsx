import { Link } from "react-router-dom";
import classes from "./DisplayCv.module.css";
import { Avatar } from "@components/Avatar/Avatar";
import { LinkWithIcon } from "@components/LinkWithIcon/LinkWithIcon";

export const DisplayCv = () => {
  return (
    <div className={classes.container}>
      <div className={classes.back}>
        <Link to="/">
          <span className="material-icons" style={{ color: "#9e9e9e" }}>
            arrow_back_ios
          </span>{" "}
          Wróć
        </Link>
      </div>

      <div className={classes.profile}>
        <Avatar />
        <p>Jan Kowalski</p>
        <LinkWithIcon icon="" text="jankowalski" to="https://megak.pl"/>
      </div>
      <div className={classes.details}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};
