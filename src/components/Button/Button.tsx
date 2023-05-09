import Loading from "@assets/Loading.svg";
import { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./Button.module.css";
interface Props extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  customClasses?: string;
  status?: "active" | "disabled";
  loading?: boolean;
  name?:string;
}

export const Button = ({
  className,
  children,
  customClasses = "",
  status = "active",
  loading = false,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={`${classes.button} ${classes[status]} ${customClasses}`}
    >
      {!loading && children}
      {loading ? (
        <img
          src={Loading}
          alt="Loading"
          draggable={false}
          className={classes.loading}
        />
      ) : null}
    </button>
  );
};
