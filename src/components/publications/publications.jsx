import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./publications.module.css";
import imagen from "../../images/publications.png";
import Collapsible from "react-collapsible";
import { useLocation } from "react-router-dom";
export const Publications = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(0);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  const mainContentRef = useRef(null);
  const [showIcon, setShowIcon] = useState(true);
  const handleToggle = (index) => {
    if (isOpen === index) {
      setIsOpen(0); // Cierra todos si el actual ya está abierto
    } else {
      setIsOpen(index); // Abre el Collapsible clickeado y cierra los otros
    }
  };
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
      <h2 className={styles["subtitulo"]}>{t("Publications")}</h2>
      <div ref={mainContentRef} className={styles["mainContentContainer"]}>
        <div className={styles["collapsibleContainer"]}>
          <Collapsible
            triggerClassName={styles["collapsibleClose"]}
            triggerOpenedClassName={styles["collapsibleTrigerOpen"]}
            openedClassName={styles["collapsibleOpen"]}
            trigger="Escobar-Planas, M., Charisi, V., Hupont, I., Martínez-Hinarejos, C. D., & Gómez, E. (2023). Towards Children-Centred Trustworthy Conversational Agents. In Chatbots-The AI-Driven Front-Line Services for Customers. IntechOpen."
            open={isOpen === 4}
            onClick={() => handleToggle(4)}
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                {" "}
                <span className={styles["abstract"]}>Abstract: </span>
                {t("publications.4")}
              </p>
            </div>{" "}
            <a
              className={styles["links"]}
              href="https://www.intechopen.com/chapters/87502"
            >
              {t("articuloCompleto")}
            </a>
          </Collapsible>
        </div>
        <div className={styles["collapsibleContainer"]}>
          <Collapsible
            triggerClassName={styles["collapsibleClose"]}
            triggerOpenedClassName={styles["collapsibleTrigerOpen"]}
            openedClassName={styles["collapsibleOpen"]}
            trigger="Escobar-Planas, M. (2022). Towards Trustworthy Conversational Agents for Children. In Interaction Design and Children (pp. 693-695).
"
            open={isOpen === 2}
            onClick={() => handleToggle(2)}
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                {" "}
                <span className={styles["abstract"]}>Abstract: </span>
                {t("publications.2")}
              </p>
              <a
                className={styles["links"]}
                href="https://dl.acm.org/doi/abs/10.1145/3501712.3538826"
              >
                {t("articuloCompleto")}
              </a>
            </div>
          </Collapsible>
        </div>
        <div className={styles["collapsibleContainer"]}>
          <Collapsible
            triggerClassName={styles["collapsibleClose"]}
            triggerOpenedClassName={styles["collapsibleTrigerOpen"]}
            openedClassName={styles["collapsibleOpen"]}
            trigger="Escobar-Planas, M., Gómez, E., & Martınez-Hinarejos, C.D (2022) Enhancing the Design of a Conversational Agent for an Ethical Interaction with Children. In Procceedings of IberSPEECH 2022. 171–175 ."
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                {" "}
                <span className={styles["abstract"]}>Abstract: </span>
                {t("publications.5")}
              </p>
              <a
                className={styles["links"]}
                href="https://www.intechopen.com/chapters/87502"
              >
                {t("articuloCompleto")}
              </a>
            </div>{" "}
          </Collapsible>
        </div>
        <div className={styles["collapsibleContainer"]}>
          <Collapsible
            triggerClassName={styles["collapsibleClose"]}
            triggerOpenedClassName={styles["collapsibleTrigerOpen"]}
            openedClassName={styles["collapsibleOpen"]}
            trigger="Escobar-Planas, M., Gómez, E., & Martínez-Hinarejos, C. D. (2022). Guidelines to develop trustworthy conversational agents for children. Proceedings of Ethicomp 2022, 342-360.
"
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                {" "}
                <span className={styles["abstract"]}>Abstract: </span>
                {t("publications.6")}
              </p>
              <a
                className={styles["links"]}
                href="https://arxiv.org/abs/2209.02403"
              >
                {t("articuloCompleto")}
              </a>
            </div>{" "}
          </Collapsible>
        </div>
        <div className={styles["collapsibleContainer"]}>
          <Collapsible
            triggerClassName={styles["collapsibleClose"]}
            triggerOpenedClassName={styles["collapsibleTrigerOpen"]}
            openedClassName={styles["collapsibleOpen"]}
            trigger="Escobar-Planas, M., Charisi, V., & Gomez, E. (2022).  ``That Robot Played with Us!´´ Children's Perceptions of a Robot after a Child-Robot Group Interaction. Proceedings of the ACM on Human-Computer Interaction, 6(CSCW2), 1-23 .
"
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                {" "}
                <span className={styles["abstract"]}>Abstract: </span>
                {t("publications.7")}
              </p>

              <a
                className={styles["links"]}
                href="https://dl.acm.org/doi/abs/10.1145/3555118"
              >
                {t("articuloCompleto")}
              </a>
            </div>{" "}
          </Collapsible>
        </div>
        <div className={styles["collapsibleContainer"]}>
          <Collapsible
            triggerClassName={styles["collapsibleClose"]}
            triggerOpenedClassName={styles["collapsibleTrigerOpen"]}
            openedClassName={styles["collapsibleOpen"]}
            trigger="Charisi, V., Chaudron, S., Di Gioia, R., Vuorikari, R., Escobar-Planas, M., Sanchez Martin, J.I. and Gomez Gutierrez, E. (2022) Artificial Intelligence and the Rights of the Child: Towards an Integrated Agenda for Research and Policy. (No. JRC127564). Joint Research Centre (Seville site)."
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                {" "}
                <span className={styles["abstract"]}>Abstract: </span>
                {t("publications.8")}
              </p>
              <a
                className={styles["links"]}
                href="https://econpapers.repec.org/paper/iptiptwpa/jrc127564.htm"
              >
                {t("articuloCompleto")}
              </a>
            </div>{" "}
          </Collapsible>
        </div>
        <div className={styles["collapsibleContainer"]}>
          <Collapsible
            triggerClassName={styles["collapsibleClose"]}
            triggerOpenedClassName={styles["collapsibleTrigerOpen"]}
            openedClassName={styles["collapsibleOpen"]}
            trigger="Charisi, V., Merino, L., Escobar, M., Caballero, F., Gomez, R., & Gómez, E. (2021) The Effects of Robot Cognitive Reliability and Social Positioning on Child-Robot Team Dynamics. In 2021 IEEE international conference on robotics and automation (ICRA) (pp. 9439-9445). IEEE.
"
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                <span className={styles["abstract"]}>Abstract: </span>{" "}
                {t("publications.9")}
              </p>
              <a
                className={styles["links"]}
                href="https://ieeexplore.ieee.org/abstract/document/9560760"
              >
                {t("articuloCompleto")}
              </a>
            </div>
          </Collapsible>
        </div>
      </div>
      <div className={styles["iconoFinalPagina"]}>{showIcon && ". . ."}</div>
    </>
  );
};
