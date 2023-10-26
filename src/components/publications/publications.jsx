import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./publications.module.css";

export const Publications = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <h1>Aqui viene la imagen de {t("Publications")}</h1>
      </div>
      <div>
        <p>{t("openingMessage")}</p>
        <p>{t("Publications")}</p>
      </div>
    </>
  );
};
