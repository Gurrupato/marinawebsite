import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./publications.module.css";
import imagen from "../../images/publications.png";
import Collapsible from "react-collapsible";

export const Publications = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(0);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const handleToggle = (index) => {
    if (isOpen === index) {
      setIsOpen(0); // Cierra todos si el actual ya está abierto
    } else {
      setIsOpen(index); // Abre el Collapsible clickeado y cierra los otros
    }
  };

  return (
    <>
      <div className={styles["navbarUnder"]}>
        <img src={imagen}></img>
      </div>
      <h2 className={styles["subtitulo"]}>{t("Publications")}</h2>
      <div className={styles["mainContentContainer"]}>
        <div className={styles["collapsibleContainer"]}>
          <Collapsible
            triggerClassName={styles["collapsibleClose"]}
            triggerOpenedClassName={styles["collapsibleTrigerOpen"]}
            openedClassName={styles["collapsibleOpen"]}
            trigger="Developing strategies to stop bullying: Design considerations for an artificial training center"
            open={isOpen === 1}
            onClick={() => handleToggle(1)}
          >
            <div className={styles["collapsibleInsert"]}>
              <p>{t("publications.1")}</p>
              <a
                className={styles["links"]}
                href="http://dialogforgood.org/wp-content/uploads/2019/09/DiGo-1_paper_9.pdf"
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
            trigger="Escobar-Planas, M. (2022). Towards Trustworthy Conversational Agents for Children. In Interaction Design and Children (pp. 693-695).
"
            open={isOpen === 2}
            onClick={() => handleToggle(2)}
          >
            <div className={styles["collapsibleInsert"]}>
              <p>{t("publications.2")}</p>
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
            trigger="From Ethical Guidelines to Practical Guidance to Develop Trustworthy Conversational Agents for Children"
            open={isOpen === 3}
            onClick={() => handleToggle(3)}
          >
            <div className={styles["collapsibleInsert"]}>
              <p>{t("publications.3")}</p>
              <a
                className={styles["links"]}
                href="https://aichildinteraction.github.io/preprint/AIAIC23_paper_790.pdf"
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
            trigger="Escobar-Planas, M., Charisi, V., Hupont, I., Martínez-Hinarejos, C. D., & Gómez, E. (2023). Towards Children-Centred Trustworthy Conversational Agents. In Chatbots-The AI-Driven Front-Line Services for Customers. IntechOpen."
            open={isOpen === 4}
            onClick={() => handleToggle(4)}
          >
            <div className={styles["collapsibleInsert"]}>
              <p>{t("publications.4")}</p>
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
            trigger="Escobar-Planas, M., Gómez, E., & Martınez-Hinarejos, C.D (2022) Enhancing the Design of a Conversational Agent for an Ethical Interaction with Children. In Proc. IberSPEECH 2022. 171–175 ."
          >
            <div className={styles["collapsibleInsert"]}>
              <p>{t("publications.5")}</p>
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
              <p>{t("publications.6")}</p>
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
              <p>{t("publications.7")}</p>

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
            trigger="Charisi, V., Chaudron, S., Di Gioia, R., Vuorikari, R., Escobar-Planas, M., Sanchez Martin, J.I. and Gomez Gutierrez, E. (2022) Artificial Intelligence and the Rights of the Child: Towards an Integrated Agenda for Research and Policy. (No. JRC127564). Joint Research Centre (Seville site).
"
          >
            <div className={styles["collapsibleInsert"]}>
              <p>{t("publications.8")}</p>
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
              <p>{t("publications.9")}</p>
              <a
                className={styles["links"]}
                href="https://ieeexplore.ieee.org/abstract/document/9560760"
              >
                {t("articuloCompleto")}
              </a>
            </div>{" "}
          </Collapsible>
        </div>
      </div>
    </>
  );
};
