import { Link } from "react-router-dom";
import classes from "./DisplayCv.module.css";
import { Avatar } from "@components/Avatar/Avatar";
import { LinkWithIcon } from "@components/LinkWithIcon/LinkWithIcon";
import { ContrastSection } from "@components/ContrastSection/ContrastSection";
import { useState } from "react";
import { Text } from "@components/Text/Text";
import { Button } from "@components/Button/Button";

export const DisplayCv = () => {
  const [studentData, setStudentData] = useState({
    bio: "",
    canTakeApprenticeship: false,
    education: "",
    expectedContractType: "",
    expectedSalary: 0,
    expectedTypeWork: "",
    firstname: "",
    githubUsername: "",
    id: "",
    lastname: "",
    monthsOfCommercialExp: 0,
    portfolioUrls: [],
    projectUrls: [],
    targetWorkCity: "",
    tel: "",
    workExperience: "",
    courses: "",
  });
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
        <Avatar type="large" githubUsername="mikolajhere" />
        <h2>Jan Kowalski</h2>
        <LinkWithIcon icon={""} text="jankowalski" to="https://megak.pl" />
        <div className={classes.contact}>
          <LinkWithIcon
            icon={"phone"}
            text="+48 566 072 227"
            to="tel:+48566072227"
            style={{ color: "white", marginBottom: "0.25rem" }}
          />
          <LinkWithIcon
            icon={"mail"}
            text="jankowalski@gmail.com"
            to="tel:+48566072227"
            style={{ color: "white" }}
          />
          <Text style={{ color: "grey", marginTop: "1.5rem" }}>O mnie</Text>
          <Text
            style={{
              color: "#f7f7f7",
              marginBottom: "1.5rem",
              fontWeight: "200",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            doloremque atque eius sunt, excepturi alias dolorem exercitationem
            neque at?
          </Text>
          <Button style={{ width: "100%", marginBottom: "0.75rem" }}>
            Brak zainteresowania
          </Button>
          <Button style={{ width: "100%" }}>Zatrudniony</Button>
        </div>
      </div>
      <div className={classes.details}></div>
    </div>
  );
};
