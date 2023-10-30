import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./publications.module.css";
import imagen from "../../images/publications.png";

export const Publications = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <img src={imagen}></img>
      </div>
      <div className={styles["mainContentContainer"]}>
        <p>{t("openingMessage")}</p>
        <p>{t("Publications")}</p>
      </div>
    </>
  );
};
