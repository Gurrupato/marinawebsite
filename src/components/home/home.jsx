import React from "react";

import styles from "./home.module.css";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <h1>Aqui viene la imagen de {t("Home")}</h1>
      </div>
      <div>
        <p>{t("openingMessage")}</p>
        <p>{t("Home")}</p>
      </div>
    </>
  );
};
