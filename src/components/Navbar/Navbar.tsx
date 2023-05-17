import React, { SyntheticEvent, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { PageRouter } from "@enums/page-router.enum";
import { RequestPath } from "@enums/request-path.enum";
import { useAxios } from "@hooks/useAxios";
import { Confirm } from "@components/Confirm/Confirm";
import { useConfirm } from "@hooks/useConfirm";
import { Avatar } from "@componentsCommon/Avatar/Avatar";
import { Logo } from "@componentsCommon/Logo/Logo";
import { Text } from "@componentsCommon/Text/Text";
import classes from "./Navbar.module.css";

interface Props {
  githubUsername?: string;
  fullName: string;
}
export const Navbar = ({ githubUsername, fullName }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { fetchData } = useAxios({
    url: RequestPath.Logout,
    method: "DELETE",
  });

  const logoutUser = async () => {
    await fetchData(() => {
      toast.success("Wylogowano");
      navigate(PageRouter.Login);
    });
  };

  const { showModal, ...restConfirm } = useConfirm({
    confirmMessage: "Czy na pewno chcesz się wylogować?",
    doAfterConfirm: logoutUser,
  });

  const toggleMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState);
  }, [setShowMenu]);

  const handleConfirm = (e: SyntheticEvent) => {
    e.preventDefault();
    showModal();
  };

  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.nav_container}>
          <Logo
            style={{ marginBottom: 0, justifyContent: "start", height: "55px" }}
            navigateToMain
          />
          <div className={classes.nav_user}>
            <button className={classes.info} onClick={toggleMenu}>
              <Avatar githubUsername={githubUsername} />
              <Text customClasses={classes.paragraph}>{fullName}</Text>
              <span className="material-icons" style={{ color: "#9e9e9e" }}>
                arrow_drop_down
              </span>
            </button>
            <div
              className={`${classes.modal} ${
                showMenu ? classes.modal_show : ""
              }`}
            >
              <Link
                to={PageRouter.Account}
                className={classes.link}
                draggable={false}
              >
                Konto
              </Link>
              <button
                onClick={handleConfirm}
                className={`${classes.button} ${classes.link}`}
                draggable={false}
              >
                Wyloguj
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Confirm {...restConfirm} />
    </>
  );
};
