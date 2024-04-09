import React, { useRef, useState, useEffect } from "react";
import styles from "./research.module.css";
import { useTranslation } from "react-i18next";
import imagen from "../../images/research.png";

export const Research = () => {
  const { t } = useTranslation();
  const mainContentRef = useRef(null);
  const [showIcon, setShowIcon] = useState(true);
  const handleScroll = () => {
    if (mainContentRef.current) {
      const div = mainContentRef.current;
      const scrollPosition = div.scrollTop + div.clientHeight;
      const totalScrollableHeight = div.scrollHeight;

      // Verificar si el contenido es lo suficientemente grande como para hacer scroll
      const isScrollable = div.scrollHeight > div.clientHeight;

      // Considerar que el scroll está 'al fondo' si se ha desplazado al menos el 90% del total
      const atBottom = scrollPosition / totalScrollableHeight >= 0.9;

      // Mostrar el ícono solo si es necesario hacer scroll y no estamos al fondo
      setShowIcon(isScrollable && !atBottom);
    }
  };

  useEffect(() => {
    const div = mainContentRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
      handleScroll(); // Establecer el estado inicial

      return () => div.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <div className={styles["navbarUnder"]}>
        <img src={imagen}></img>
      </div>
      <h2 className={styles["subtitulo"]}>{t("Research")}</h2>
      <div ref={mainContentRef} className={styles["mainContentContainer"]}>
        {t("research", { returnObjects: true }).map((text) => (
          <div className={styles["text"]}>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className={styles["iconoFinalPagina"]}>{showIcon && ". . ."}</div>
    </>
  );
};
