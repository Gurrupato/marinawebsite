import React from "react";
import styles from "./research.module.css";
import { useTranslation } from "react-i18next";

export const Research = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <h1>Aqui viene la imagen de {t("Research")}</h1>
      </div>
      <div>
        <p>{t("openingMessage")}</p>
        <p>{t("Research")}</p>
      </div>
    </>
  );
};
