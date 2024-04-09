import React, { useRef, useState, useEffect } from "react";
import styles from "./studies.module.css";
import { useTranslation } from "react-i18next";
import imagen from "../../images/estudios.png";
import Collapsible from "react-collapsible";
import { Icon } from "@iconify/react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";

export const Studies = () => {
  const { t } = useTranslation();
  const location = useLocation();
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
      <h2 className={styles["subtitulo"]}>{t("Studies")}</h2>
      <div ref={mainContentRef} className={styles["mainContentContainer"]}>
        {t("studies", { returnObjects: true }).map((content) => (
          <div className={styles["studiesContainer"]}>
            <h3>{t(content["titulo"])}</h3>
            <div className={styles["studiesData"]}>
              <span className={styles["place"]}>{t(content["place"])}</span>
              <span className={styles["fecha"]}>{t(content["fecha"])}</span>
            </div>
            {content.texto.map((text) => (
              <div className={styles["text"]}>
                <p>
                  <ReactMarkdown>{text}</ReactMarkdown>
                </p>
              </div>
            ))}
            <div className={styles["collapsibleContainer"]}>
              <ul>
                {" "}
                {content.extras.map((extra) => (
                  <li>
                    {" "}
                    <ReactMarkdown>{extra}</ReactMarkdown>
                  </li>
                ))}
              </ul>{" "}
              {content.asignaturas[0] == "no" ? (
                ""
              ) : (
                <Collapsible
                  triggerClassName={styles["collapsibleClose"]}
                  triggerOpenedClassName={styles["collapsibleTrigerOpen"]}
                  openedClassName={styles["collapsibleOpen"]}
                  trigger={
                    <div className={styles["asignaturasContainer"]}>
                      <Icon icon="ion:ios-arrow-dropdown-circle" />
                      {"                "}
                      {t("asignaturas")}
                    </div>
                  }
                >
                  <ul>
                    {content.asignaturas.map((extra) => (
                      <li>
                        {" "}
                        <ReactMarkdown>{extra}</ReactMarkdown>
                      </li>
                    ))}
                  </ul>
                </Collapsible>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles["iconoFinalPagina"]}>{showIcon && ". . ."}</div>
    </>
  );
};
