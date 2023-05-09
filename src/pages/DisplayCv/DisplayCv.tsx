import { Link } from "react-router-dom";
import classes from "./DisplayCv.module.css";
import { Avatar } from "@components/Avatar/Avatar";
import { LinkWithIcon } from "@components/LinkWithIcon/LinkWithIcon";
import { ContrastSection } from "@components/ContrastSection/ContrastSection";
import { useState } from "react";
import { Text } from "@components/Text/Text";
import { Button } from "@components/Button/Button";
import { StudentProfile } from "@components/StudentProfile/StudentProfile";
import { ShowRating } from "@components/ShowRating/ShowRating";
import attach_file from "@assets/attach_file.svg";
import { ExpectationContainer } from "@components/ExpectationContainer/ExpectationContainer";
import { Dropdown } from "@components/Dropdown/Dropdown";

export const DisplayCv = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.back}>
          <Link to="/">
            <span className="material-icons" style={{ color: "#9e9e9e" }}>
              arrow_back_ios
            </span>{" "}
            Wróć
          </Link>
        </div>

        <StudentProfile
          name="Jan Kowalski"
          ghLink="janKowalski"
          phone="+48500600700"
          mail="jan.kowalski@gmail.com"
          aboutMe="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odio numquam consequuntur quo veniam dolore enim sint. Incidunt, nostrum. Sapiente reiciendis praesentium aperiam ipsam exercitationem unde soluta excepturi accusamus eius?"
        />

        <div className={classes.details}>
          <div className={classes.title_gutter}>Ocena</div>
          <div className={classes.content_gutter}>
            <ShowRating
              degree={5}
              isStars
              paragraphText="Ocena przejścia kursu"
            />
            <ShowRating
              degree={3}
              isStars
              paragraphText="Ocena aktywności i zaangażowania na kursie"
            />
            <ShowRating
              degree={4}
              isStars
              paragraphText="Ocena kodu w projekcie własnym"
            />
            <ShowRating
              degree={5}
              isStars
              paragraphText="Ocena pracy w zespole w Scrum"
            />
          </div>
          <div className={classes.title_gutter}>
            Oczekiwania w stosunku do zatrudnienia
          </div>
          <div className={classes.content_gutter}>
            <ExpectationContainer
              title="Preferowane miejsce pracy"
              expectation="Biuro"
            />
            <ExpectationContainer
              title="Docelowe miasto, gdzie chce pracować kandydat"
              expectation="Warszawa"
            />
            <ExpectationContainer
              title="Oczekiwany typ kontraktu"
              expectation="Umowa o pracę"
            />
            <ExpectationContainer
              title="Oczekiwane wynagordzenie miesięczne netto"
              expectation="8 000 zł"
            />
            <ExpectationContainer
              title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
              expectation="TAK"
            />
            <ExpectationContainer
              title="Komercyjne doświadczenie w programowaniu"
              expectation="6 miesięcy"
            />
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
            natus expedita similique! Odit in accusamus sed aperiam earum
            corrupti soluta voluptate, cupiditate impedit quia commodi!
          </Text>
          <div className={classes.title_gutter}>Doświadczenie zawodowe</div>
          <Text className={classes.content_gutter}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            natus expedita similique! Odit in accusamus sed aperiam earum
            corrupti soluta voluptate, cupiditate impedit quia commodi!
          </Text>
          <div className={classes.title_gutter}>Portfolio</div>
          <LinkWithIcon
            to="/"
            text="https://Loremipsum/dolor/sit/amet"
            icon={attach_file}
            style={{ padding: "1.5rem", color: "#1585cc" }}
          />
          <div className={classes.title_gutter}>
            Projekt w zespole Scrumowym
          </div>
          <LinkWithIcon
            to="/"
            text="https://github.com/Ami777/MegaKursTest/commits?author=Ami777"
            icon={attach_file}
            style={{ padding: "1.5rem 1.5rem 0.5rem" }}
          />
          <LinkWithIcon
            to="/"
            text="https://github.com/Ami777/MegaKursTest/pulls?q=is%3Apr+reviewed-by%3AAmi777"
            icon={attach_file}
            style={{ padding: "0.5rem 1.5rem 1.5rem" }}
          />
          <div className={classes.title_gutter}>Projekt na zaliczenie</div>
          <LinkWithIcon
            to="/"
            text="https://Loremipsum/dolor/sit/amet"
            icon={attach_file}
            style={{ padding: "1.5rem 1.5rem 0.5rem" }}
          />
          <LinkWithIcon
            to="/"
            text="https://Loremipsum/dolor/sit/amet"
            icon={attach_file}
            style={{ padding: "0.5rem 1.5rem 1.5rem" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Dropdown
          reservationData={
            <Text>
              Rezerwacja do <br />
              18.07.2023 r.
            </Text>
          }
          userNameAvatarData={<Avatar githubUsername="mikolajhere" />}
          userNameData={"Mikołaj"}
          children={
            <>
              <ExpectationContainer
                title="Ocena przejścia kursu"
                expectation="5 / 5"
              />
              <ExpectationContainer
                title="Ocena aktywności i zaangażowania na kursie"
                expectation="3 / 5"
              />
              <ExpectationContainer
                title="Ocena kodu w projekcie własnym"
                expectation="4 / 5"
              />
              <ExpectationContainer
                title="Ocena pracy w zespole w Scrum"
                expectation="5 / 5"
              />
              <ExpectationContainer
                title="Preferowane miejsce pracy"
                expectation="Biuro"
              />
              <ExpectationContainer
                title="Docelowe miasto, gdzie chce pracować kandydat"
                expectation="Warszawa"
              />
              <ExpectationContainer
                title="Oczekiwany typ kontraktu"
                expectation="Umowa o pracę"
              />
              <ExpectationContainer
                title="Oczekiwanie wynagordzenie miesięczne netto"
                expectation="8000 zł"
              />
              <ExpectationContainer
                title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
                expectation="TAK"
              />
              <ExpectationContainer
                title="Komercyjne doświadczenie w programowaniu"
                expectation="6 miesięcy"
              />
            </>
          }
          firstOptionalBtn={<Button>Zarezerwuj rozmowę</Button>}
          secondOptionalBtn={<Button>Wyślij wiadomość</Button>}
        />
        <Dropdown
          reservationData={
            <Text>
              Rezerwacja do <br />
              18.07.2023 r.
            </Text>
          }
          userNameAvatarData={<Avatar githubUsername="mikolajhere" />}
          userNameData={"Mikołaj"}
          children={
            <>
              <ExpectationContainer
                title="Ocena przejścia kursu"
                expectation="5 / 5"
              />
              <ExpectationContainer
                title="Ocena aktywności i zaangażowania na kursie"
                expectation="3 / 5"
              />
              <ExpectationContainer
                title="Ocena kodu w projekcie własnym"
                expectation="4 / 5"
              />
              <ExpectationContainer
                title="Ocena pracy w zespole w Scrum"
                expectation="5 / 5"
              />
              <ExpectationContainer
                title="Preferowane miejsce pracy"
                expectation="Biuro"
              />
              <ExpectationContainer
                title="Docelowe miasto, gdzie chce pracować kandydat"
                expectation="Warszawa"
              />
              <ExpectationContainer
                title="Oczekiwany typ kontraktu"
                expectation="Umowa o pracę"
              />
              <ExpectationContainer
                title="Oczekiwanie wynagordzenie miesięczne netto"
                expectation="8000 zł"
              />
              <ExpectationContainer
                title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
                expectation="TAK"
              />
              <ExpectationContainer
                title="Komercyjne doświadczenie w programowaniu"
                expectation="6 miesięcy"
              />
            </>
          }
          firstOptionalBtn={<Button>Zarezerwuj rozmowę</Button>}
          secondOptionalBtn={<Button>Wyślij wiadomość</Button>}
        />
        <Dropdown
          reservationData={
            <Text>
              Rezerwacja do <br />
              18.07.2023 r.
            </Text>
          }
          userNameAvatarData={<Avatar githubUsername="mikolajhere" />}
          userNameData={"Mikołaj"}
          children={
            <>
              <ExpectationContainer
                title="Ocena przejścia kursu"
                expectation="5 / 5"
              />
              <ExpectationContainer
                title="Ocena aktywności i zaangażowania na kursie"
                expectation="3 / 5"
              />
              <ExpectationContainer
                title="Ocena kodu w projekcie własnym"
                expectation="4 / 5"
              />
              <ExpectationContainer
                title="Ocena pracy w zespole w Scrum"
                expectation="5 / 5"
              />
              <ExpectationContainer
                title="Preferowane miejsce pracy"
                expectation="Biuro"
              />
              <ExpectationContainer
                title="Docelowe miasto, gdzie chce pracować kandydat"
                expectation="Warszawa"
              />
              <ExpectationContainer
                title="Oczekiwany typ kontraktu"
                expectation="Umowa o pracę"
              />
              <ExpectationContainer
                title="Oczekiwanie wynagordzenie miesięczne netto"
                expectation="8000 zł"
              />
              <ExpectationContainer
                title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
                expectation="TAK"
              />
              <ExpectationContainer
                title="Komercyjne doświadczenie w programowaniu"
                expectation="6 miesięcy"
              />
            </>
          }
          firstOptionalBtn={<Button>Zarezerwuj rozmowę</Button>}
          secondOptionalBtn={<Button>Wyślij wiadomość</Button>}
        />
      </div>
    </>
  );
};
