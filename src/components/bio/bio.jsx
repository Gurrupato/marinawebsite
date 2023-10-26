import React from "react";

import styles from "./bio.module.css";
import { useTranslation } from "react-i18next";

export const Bio = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <h1>Aqui viene la imagen de {t("Bio")}</h1>
      </div>
      <div>
        <p>{t("openingMessage")}</p>
        <p>{t("Bio")}</p>
      </div>
    </>
  );
};
