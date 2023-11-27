import React from "react";

import styles from "./studies.module.css";
import { useTranslation } from "react-i18next";
import imagen from "../../images/estudios.png";

export const Studies = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <img src={imagen}></img>
      </div>
      <h2 className={styles["subtitulo"]}>{t("Studies")}</h2>
      <div className={styles["mainContentContainer"]}>
        <h3 className={styles["primeraLinea"]}>{t("UniversidadValencia")}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus minima
          rerum facilis architecto. Saepe ex dolore, sed inventore, architecto
          repudiandae ratione similique vitae doloremque officia alias magnam!
          Voluptas, perferendis quo?
        </p>
        <h3>{t("UniversidadSevilla")}</h3>
        <p>{t("UniversidadSevillaTitulacion2")}</p>
        <p>{t("UniversidadSevillaExtra2")}</p>
        <p>{t("UniversidadSevillaExtra3")}</p>
        <h3>{t("UniversidadSevilla")}</h3>
        <p>{t("UniversidadSevillaTitulacion")}</p>
        <p>{t("UniversidadSevillaExtra")}</p>
      </div>
    </>
  );
};
