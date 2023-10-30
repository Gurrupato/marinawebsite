import React from "react";
import styles from "./research.module.css";
import { useTranslation } from "react-i18next";
import imagen from "../../images/research.png";

export const Research = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <img src={imagen}></img>
      </div>
      <div className={styles["mainContentContainer"]}>
        <p>{t("openingMessage")}</p>
        <p>{t("Research")}</p>
      </div>
    </>
  );
};
