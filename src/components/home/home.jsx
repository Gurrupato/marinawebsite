import React from "react";

import styles from "./home.module.css";
import { useTranslation } from "react-i18next";
import imagen from "../../images/imagenDePrueba.png";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <img src={imagen}></img>
      </div>
      <div className={styles["mainContentContainer"]}>
        <p>{t("openingMessage")}</p>
        <p>{t("Home")}</p>
      </div>
    </>
  );
};
