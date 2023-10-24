import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const { t } = useTranslation();
  const [apartado, setApartado] = useState("Home");

  return (
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
        {t("home")}
      </Link>

      <Link
        onClick={() => {
          setApartado("Studies");
          console.log("Studies");
        }}
        to="/studies"
        className={
          apartado == "Studies"
            ? styles["navbarButtonsActivo"]
            : styles["navbarButtons"]
        }
      >
        {t("studies")}
      </Link>
    </div>
  );
};
