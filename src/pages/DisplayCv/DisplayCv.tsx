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
        <Avatar type="large" githubUsername="craftzdog" />
        <h2>Jan Kowalski</h2>
        <LinkWithIcon icon={"./github.svg"} text="jankowalski" to="https://megak.pl" />
        <div className={classes.contact}>
          <LinkWithIcon
            icon={"./phone.svg"}
            text="+48 566 072 227"
            to="tel:+48566072227"
            style={{ color: "white", marginBottom: "0.25rem" }}
          />
          <LinkWithIcon
            icon={"./mail.svg"}
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
      <div className={classes.details}>
        <div className={classes.title_gutter}>Ocena</div>
        <div className={classes.content_gutter}>
          <div className={classes.rate_container}>
            <span className={classes.rate_title}>Ocena przejścia kursu</span>
            <div className={classes.rating}>
              <div className={classes.figure}>
                <span className={classes.rate_bold}>5</span> / 5
              </div>
              <div className={classes.stars_row}>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
              </div>
            </div>
          </div>
          <div className={classes.rate_container}>
            <span className={classes.rate_title}>
              Ocena aktywności i zaangażowania na kursie
            </span>
            <div className={classes.rating}>
              <div className={classes.figure}>
                <span className={classes.rate_bold}>3</span> / 5
              </div>
              <div className={classes.stars_row}>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#4f4f4f" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#4f4f4f" }}>
                  star
                </span>
              </div>
            </div>
          </div>
          <div className={classes.rate_container}>
            <span className={classes.rate_title}>
              Ocena kodu w projekcie własnym
            </span>
            <div className={classes.rating}>
              <div className={classes.figure}>
                <span className={classes.rate_bold}>4</span> / 5
              </div>
              <div className={classes.stars_row}>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#4f4f4f" }}>
                  star
                </span>
              </div>
            </div>
          </div>
          <div className={classes.rate_container}>
            <span className={classes.rate_title}>
              Ocena pracy w zespole w Scrum
            </span>
            <div className={classes.rating}>
              <div className={classes.figure}>
                <span className={classes.rate_bold}>5</span> / 5
              </div>
              <div className={classes.stars_row}>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
                <span className="material-icons" style={{ color: "#E02735" }}>
                  star
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.title_gutter}>
          Oczekiwania w stosunku do zatrudnienia
        </div>
        <div className={classes.content_gutter}>
          <div className={classes.rate_container}>
            <span className={classes.expectations_title}>
              Preferowane miejsce pracy
            </span>
            <div className={classes.rating}>
              <div className={classes.figure}>
                <span className={classes.rate_bold}>Biuro</span>
              </div>
            </div>
          </div>
          <div className={classes.rate_container}>
            <span className={classes.expectations_title}>
              Docelowe miasto, gdzie chce pracować kandydat
            </span>
            <div className={classes.rating}>
              <div className={classes.figure}>
                <span className={classes.rate_bold}>Warszawa</span>
              </div>
            </div>
          </div>
          <div className={classes.rate_container}>
            <span className={classes.expectations_title}>Oczekiwany typ kontraktu</span>
            <div className={classes.rating}>
              <div className={classes.figure}>
                <span className={classes.rate_bold}>Umowa o pracę</span>
              </div>
            </div>
          </div>
          <div className={classes.rate_container}>
            <span className={classes.expectations_title}>
              Oczekiwane wynagordzenie miesięczne netto
            </span>
            <div className={classes.rating}>
              <div className={classes.figure}>
                <span className={classes.rate_bold}>8 000 zł</span>
              </div>
            </div>
          </div>
          <div className={classes.rate_container}>
            <span className={classes.expectations_title}>
              Zgoda na odbycie bezpłatnych praktyk/stażu na początek
            </span>
            <div className={classes.rating}>
              <div className={classes.figure}>
                <span className={classes.rate_bold}>TAK</span>
              </div>
            </div>
          </div>
          <div className={classes.rate_container}>
            <span className={classes.expectations_title}>
              Komercyjne doświadczenie w programowaniu
            </span>
            <div className={classes.rating}>
              <div className={classes.figure}>
                <span className={classes.rate_bold}>6 miesięcy</span>
              </div>
            </div>
          </div> 
        </div>
        <div className={classes.title_gutter}>Edukacja</div>
        <Text className={classes.content_gutter}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem iste
          cum, nisi qui delectus impedit? Repellat sit beatae nobis excepturi,
          porro nihil aliquam, pariatur ex minus, est illum sint impedit.
        </Text>
        <div className={classes.title_gutter}>Kursy</div>
        <Text className={classes.content_gutter}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          natus expedita similique! Odit in accusamus sed aperiam earum corrupti
          soluta voluptate, cupiditate impedit quia commodi!
        </Text>
        <div className={classes.title_gutter}>Doświadczenie zawodowe</div>
        <Text className={classes.content_gutter}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          natus expedita similique! Odit in accusamus sed aperiam earum corrupti
          soluta voluptate, cupiditate impedit quia commodi!
        </Text>
        <div className={classes.title_gutter}>Portfolio</div>
        <LinkWithIcon
          to="/"
          text="https://Loremipsum/dolor/sit/amet"
          icon="./attach_file.svg"
          style={{ padding: "1.5rem", color: "#1585cc" }}
        /> 
        <div className={classes.title_gutter}>Projekt w zespole Scrumowym</div>
        <LinkWithIcon
          to="/"
          text="https://github.com/Ami777/MegaKursTest/commits?author=Ami777"
          icon="./attach_file.svg"
          style={{ padding: "1.5rem 1.5rem 0.5rem" }}
        />
        <LinkWithIcon
          to="/"
          text="https://github.com/Ami777/MegaKursTest/pulls?q=is%3Apr+reviewed-by%3AAmi777"
          icon="./attach_file.svg"
          style={{ padding: "0.5rem 1.5rem 1.5rem" }}
        />
        <div className={classes.title_gutter}>Projekt na zaliczenie</div>
        <LinkWithIcon
          to="/"
          text="https://Loremipsum/dolor/sit/amet"
          icon="./attach_file.svg"
          style={{ padding: "1.5rem 1.5rem 0.5rem" }}
        />
        <LinkWithIcon
          to="/"
          text="https://Loremipsum/dolor/sit/amet"
          icon="./attach_file.svg"
          style={{ padding: "0.5rem 1.5rem 1.5rem" }}
        />
      </div>
    </div>
  );
};
