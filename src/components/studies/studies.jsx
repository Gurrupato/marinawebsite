import React from "react";

import styles from "./studies.module.css";
import { useTranslation } from "react-i18next";
import imagen from "../../images/imagenDePrueba.png";

export const Studies = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <img src={imagen}></img>
      </div>
      <div className={styles["mainContentContainer"]}>
        <p>{t("openingMessage")}</p>
        <p>{t("Studies")}</p>
      </div>
    </>
  );
};
