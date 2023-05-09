import classes from "./DisplayCvContainers.module.css";

interface Props {
  description: string;
  value: string;
}

export const RateContainer = ({ description, value }: Props) => {
  return (
    <div className={classes.rate_container}>
      <span className={classes.expectations_title}>{description}</span>
      <div className={classes.rating}>
        <div className={classes.figure}>
          <span className={classes.rate_bold}>{value}</span>
        </div>
      </div>
    </div>
  );
};
