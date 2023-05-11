import React,{ SyntheticEvent, useState } from "react";
import { Avatar } from "@components/Avatar/Avatar";
import { Button } from "@components/Button/Button";
import { Logo } from "@components/Logo/Logo";
import { Text } from "@components/Text/Text";
import { PageRouter } from "@enums/page-router.enum";
import { RequestPath } from "@enums/request-path.enum";
import { useAxios } from "@hooks/useAxios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";

interface Props {
  githubUsername?: string;
  fullName: string;
}
export const Navbar = ({ githubUsername, fullName }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { fetchData } = useAxios({ url: RequestPath.Logout, method: "DELETE" });
  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const logoutUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = confirm("Czy na pewno chcesz się wylogowac?");
    if (result) {
      await fetchData(() => {
        toast["success"]("Wylogowano");
        navigate(PageRouter.Login);
      });
    }
  };

  return (
    <nav>
      <div
        className={`${classes.nav_container} ${
          showMenu ? classes.showmenu : ""
        }`}
      >
        <Logo
          style={{ marginBottom: 0, justifyContent: "start", height: "55px" }}
          navigateToMain
        />
        <div className={classes.nav_user}>
          <button className={classes.info} onClick={toggleMenu}>
            <Avatar githubUsername={githubUsername} />
            <Text
              style={{
                font: "normal normal normal 18px/30px Catamaran",
                marginRight: "auto",
              }}
            >
              {fullName}
            </Text>
            <span className="material-icons" style={{ color: "#9e9e9e" }}>
              arrow_drop_down
            </span>
          </button>
          <div
            className={`${classes.modal} ${showMenu ? classes.showmenu : ""}`}
          >
            <Link to={PageRouter.Account}>Konto</Link>
            <Button onClick={logoutUser}>Wyloguj</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
