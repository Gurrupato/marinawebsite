import { Icon } from "@iconify/react";
import React, { useRef, useState, useEffect } from "react";
import Collapsible from "react-collapsible";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import imagen from "../../images/prevWork.png";
import styles from "./prevWork.module.css";
import { useLocation } from "react-router-dom";

export const Prevwork = () => {
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
      <h2 className={styles["subtitulo"]}>{t("PrevWork")}</h2>
      <div ref={mainContentRef} className={styles["mainContentContainer"]}>
        {t("PrevContent", { returnObjects: true }).map((content) => (
          <div className={styles["prevWorkContainer"]}>
            <h3>{t(content["titulo"])}</h3>
            <div className={styles["prevWorkData"]}>
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
                {content.extra.map((extra) => (
                  <li>
                    {" "}
                    <ReactMarkdown>{extra}</ReactMarkdown>
                  </li>
                ))}
              </ul>
              {content.tasks[0] == "no" ? (
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
                      {t("tasks")}
                    </div>
                  }
                >
                  <ul>
                    {content.tasks.map((extra) => (
                      <li>{extra}</li>
                    ))}
                  </ul>
                </Collapsible>
              )}
            </div>
          </div>
        ))}
        <div className={styles["voluntariadoContainer"]}>
          <h3>Voluntariados</h3>
          {t("voluntariados", { returnObjects: true }).map((content) => (
            <div className={styles["voluntariadoApartado"]}>
              <span className={styles["place"]}> {content.place}</span>
              <span className={styles["fecha"]}> {content.date}</span>
              <div>
                <li>{content.nombre}</li>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles["iconoFinalPagina"]}>{showIcon && ". . ."}</div>
    </>
  );
};
