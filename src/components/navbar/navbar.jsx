import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const { t } = useTranslation();
  const [apartado, setApartado] = useState("Home");
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    navbarOpen ? setNavbarOpen(false) : setNavbarOpen(true);
    console.log(navbarOpen);
  };

  return (
    <div className={styles["navbarContainer"]}>
      <div className={styles["navbar"]}>
        <Link
          onClick={() => {
            setApartado("Home");
            console.log("Home");
          }}
          to="/"
          className={
            apartado == "Home"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Home")}
        </Link>

        <Link
          onClick={() => {
            setApartado("Studies");
            console.log("Studies");
          }}
          to="/Studies"
          className={
            apartado == "Studies"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Studies")}
        </Link>
        <Link
          onClick={() => {
            setApartado("PrevWork");
            console.log("PrevWork");
          }}
          to="/PrevWork"
          className={
            apartado == "PrevWork"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("PrevWork")}
        </Link>
        {/* <Link
          onClick={() => {
            setApartado("Bio");
            console.log("Bio");
          }}
          to="/Bio"
          className={
            apartado == "Bio"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Bio")}
        </Link> */}
        <Link
          onClick={() => {
            setApartado("Research");
            console.log("Research");
          }}
          to="/Research"
          className={
            apartado == "Research"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Research")}
        </Link>
        <Link
          onClick={() => {
            setApartado("Publications");
            console.log("Publications");
          }}
          to="/Publications"
          className={
            apartado == "Publications"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Publications")}
        </Link>
      </div>
      <button
        className={styles["navbarButton"]}
        onClick={() => {
          handleNavbar();
        }}
      >
        | | |
      </button>
      <div
        className={navbarOpen ? styles["navbarMobile"] : styles["navbarClose"]}
      >
        <Link
          onClick={() => {
            handleNavbar();

            setApartado("Home");
            console.log("Home");
          }}
          to="/"
          className={
            apartado == "Home"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Home")}
        </Link>

        <Link
          onClick={() => {
            handleNavbar();

            setApartado("Studies");
            console.log("Studies");
          }}
          to="/Studies"
          className={
            apartado == "Studies"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Studies")}
        </Link>
        <Link
          onClick={() => {
            handleNavbar();

            setApartado("prevWork");
            console.log("prevWork");
          }}
          to="/prevWork"
          className={
            apartado == "prevWork"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("PrevWork")}
        </Link>
        <Link
          onClick={() => {
            handleNavbar();
            setApartado("Research");
            console.log("Research");
          }}
          to="/Research"
          className={
            apartado == "Research"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Research")}
        </Link>
        <Link
          onClick={() => {
            handleNavbar();

            setApartado("Publications");
            console.log("Publications");
          }}
          to="/Publications"
          className={
            apartado == "Publications"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Publications")}
        </Link>
      </div>
    </div>
  );
};
