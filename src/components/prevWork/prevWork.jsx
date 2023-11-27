import React from "react";
import styles from "./prevWork.module.css";
import { useTranslation } from "react-i18next";
import imagen from "../../images/prevWork.png";

export const Prevwork = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["navbarUnder"]}>
        <img src={imagen}></img>
      </div>
      <h2 className={styles["subtitulo"]}>{t("PrevWork")}</h2>
      <div className={styles["mainContentContainer"]}>
        <div className={styles["prevWorkContainer"]}>
          <h3>{t("PrevContent.1.titulo")}</h3>
          <p>{t("PrevContent.1.place")}</p>
          <p>{t("PrevContent.1.fecha")}</p>

          {t("PrevContent.1.texto", { returnObjects: true }).map((text) => (
            <p>{text}</p>
          ))}
        </div>
        <div className={styles["prevWorkContainer"]}>
          <h3>{t("PrevContent.2.titulo")}</h3>
          <p>{t("PrevContent.2.place")}</p>
          <p>{t("PrevContent.2.fecha")}</p>
          {t("PrevContent.2.texto", { returnObjects: true }).map((text) => (
            <p>{text}</p>
          ))}
        </div>
        <div className={styles["prevWorkContainer"]}>
          <h3>{t("PrevContent.3.titulo")}</h3>
          <p>{t("PrevContent.3.place")}</p>
          <p>{t("PrevContent.3.fecha")}</p>
          {t("PrevContent.3.texto", { returnObjects: true }).map((text) => (
            <p>{text}</p>
          ))}
        </div>
        <div className={styles["prevWorkContainer"]}>
          <h3>{t("PrevContent.4.titulo")}</h3>
          <p>{t("PrevContent.4.place")}</p>
          <p>{t("PrevContent.4.fecha")}</p>
          {t("PrevContent.4.texto", { returnObjects: true }).map((text) => (
            <p>{text}</p>
          ))}
        </div>
        <div className={styles["prevWorkContainer"]}>
          <h3>{t("PrevContent.5.titulo")}</h3>
          <p>{t("PrevContent.5.place")}</p>
          <p>{t("PrevContent.5.fecha")}</p>
          {t("PrevContent.5.texto", { returnObjects: true }).map((text) => (
            <p>{text}</p>
          ))}
        </div>
        <div className={styles["prevWorkContainer"]}>
          <h3>{t("PrevContent.6.titulo")}</h3>
          <p>{t("PrevContent.6.place")}</p>
          <p>{t("PrevContent.6.fecha")}</p>
          {t("PrevContent.6.texto", { returnObjects: true }).map((text) => (
            <p>{text}</p>
          ))}
        </div>
      </div>
    </>
  );
};
