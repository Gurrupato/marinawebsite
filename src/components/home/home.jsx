import React from "react";

import styles from "./home.module.css";
import { useTranslation } from "react-i18next";
import imagen from "../../images/home2.png";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <img src={imagen}></img>
      </div>{" "}
      <h2 className={styles["subtitulo"]}>{t("Home")}</h2>
      <div className={styles["mainContentContainer"]}>
        <p>{t("HomeText")}</p>
      </div>
    </>
  );
};
