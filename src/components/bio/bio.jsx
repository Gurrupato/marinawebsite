import React from "react";

import styles from "./bio.module.css";
import { useTranslation } from "react-i18next";
import imagen from "../../images/bio.png";

export const Bio = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <img src={imagen}></img>
      </div>
      <div className={styles["mainContentContainer"]}>
        <p>{t("openingMessage")}</p>
        <p>{t("Bio")}</p>
      </div>
    </>
  );
};
