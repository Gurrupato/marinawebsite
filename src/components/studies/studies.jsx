import React from "react";

import styles from "./studies.module.css";
import { useTranslation } from "react-i18next";

export const Studies = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <h1>Aqui viene la imagen de {t("Studies")}</h1>
      </div>
      <div>
        <p>{t("openingMessage")}</p>
        <p>{t("Studies")}</p>
      </div>
    </>
  );
};
