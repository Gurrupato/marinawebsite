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
      <div className={styles["mainContentContainer"]}>
        <h2 className={styles["subtitulo"]}>{t("Publications")}</h2>

        <div className={styles["collapsibleContainer"]}>
          <Collapsible
            triggerClassName={styles["collapsibleClose"]}
            triggerOpenedClassName={styles["collapsibleOpen"]}
            trigger="Developing strategies to stop bullying: Design considerations for an artificial training center"
            open={isOpen === 1}
            onClick={() => handleToggle(1)}
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                Reporting incidents to an adult is the top recommendation for
                youth victims facing bullying. At the same time, victims need to
                develop strategies to use when they are facing their offenders:
                counter aggression and making a safety plan. This paper presents
                design considerations for a conversational system being a
                training center for a victim to learn and try such strategies.
                We first detail what is bullying and existing preventive
                measures. We then detail specific features of such a
                conversational system and we define a set of functionalities and
                dialog design considerations required to ensure compliance with
                the preceding features. We close with the presentation of a
                simple illustrative implementation.
              </p>
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
            triggerOpenedClassName={styles["collapsibleOpen"]}
            trigger="Towards Trustworthy Conversational Agents for Children"
            open={isOpen === 2}
            onClick={() => handleToggle(2)}
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                Conversational agents (CAs) such as Amazon Alexa, Google
                Assistant or website chatbots are becoming very popular in some
                countries, and despite their adult-centered design, these
                devices are becoming part of children's lives, creating the need
                for children-centric and trustworthy systems. This thesis aims
                to study CAs, with a special focus on children and
                trustworthiness, in order to identify the main aspects and
                criteria for their evaluation and improvement, and creating
                methodologies contributing to the design of trustworthy,
                child-centred CAs.
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
            triggerOpenedClassName={styles["collapsibleOpen"]}
            trigger="From Ethical Guidelines to Practical Guidance to Develop Trustworthy Conversational Agents for Children"
            open={isOpen === 3}
            onClick={() => handleToggle(3)}
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                Conversational agents (CAs), such as chatbots or home
                assistants, have gained a lot of popularity in the last decade
                and, despite their adult-centred design, have become part of
                many children’s lives. However, children’s voices, behaviours or
                needs differ from adults, and these differences pose a challenge
                for CAs. In addition, considering the vulnerability of children,
                there is a clear need for the development of trustworthy systems
                that take children’s needs into account. In this article we
                present relevant ethical guidelines on AI and summarize our work
                on adapting them to the specific case of CAs and children. In
                particular, we present some concrete recommendations for
                developers to support the ethical design of CAs for children.
              </p>
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
            triggerOpenedClassName={styles["collapsibleOpen"]}
            trigger="Towards Children-Centred Trustworthy Conversational Agents"
            open={isOpen === 4}
            onClick={() => handleToggle(4)}
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                Conversational agents (CAs) have been increasingly used in
                various domains, including education, health and entertainment.
                One of the growing areas of research is the use of CAs with
                children. However, the development and deployment of CAs for
                children come with many specific challenges and ethical and
                social responsibility concerns. This chapter aims to review the
                related work on CAs and children, point out the most popular
                topics and identify opportunities and risks. We also present our
                proposal for ethical guidelines on the development of
                trustworthy artificial intelligence (AI), which provide a
                framework for the ethical design and deployment of CAs with
                children. The chapter highlights, among other principles, the
                importance of transparency and inclusivity to safeguard user
                rights in AI technologies. Additionally, we present the
                adaptation of previous AI ethical guidelines to the specific
                case of CAs and children, highlighting the importance of data
                protection and human agency. Finally, the application of ethical
                guidelines to the design of a conversational agent is presented,
                serving as an example of how these guidelines can be integrated
                into the development process of these systems. Ethical
                principles should guide the research and development of CAs for
                children to enhance their learning and social development.
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
            triggerOpenedClassName={styles["collapsibleOpen"]}
            trigger="Enhancing the Design of a Conversational Agent for an Ethical Interaction with Children"
          >
            <div className={styles["collapsibleInsert"]}>
              <p>NO SE QUE PONER</p>
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
            triggerOpenedClassName={styles["collapsibleOpen"]}
            trigger="Guidelines to Develop Trustworthy Conversational Agents for Children"
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                Conversational agents (CAs) embodied in speakers or chatbots are
                becoming very popular in some countries, and despite their
                adult-centred design, they have become part of children's lives,
                generating a need for children-centric trustworthy systems. This
                paper presents a literature review to identify the main
                opportunities, challenges and risks brought by CAs when used by
                children. We then consider relevant ethical guidelines for AI
                and adapt them to this particular system and population, using a
                Delphi methodology with a set of experts from different
                disciplines. From this analysis, we propose specific guidelines
                to help CAs developers improve their design towards
                trustworthiness and children.
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
            triggerOpenedClassName={styles["collapsibleOpen"]}
            trigger="That Robot Played with Us! Children's Perceptions of a Robot after a Child-Robot Group Interaction"
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                The design of child-centred, intelligent and collaborative
                robots is a challenging endeavour, which requires to understand
                how the implemented robot behaviours and collaboration paradigms
                affect children's perception about the robot. This paper
                presents the results of a set of semi-structured interviews of
                N=81, 5 to 8 years old children who previously interacted in
                pairs with a robot in the context of a problem-solving task. We
                manipulated two different factors of the robot behaviour:
                cognitive reliability in logic game movements (optimal vs
                sub-optimal) and expressivity in the communication (expressive
                vs neutral) and we assigned the children in one of the four
                conditions. At post-intervention interviews, we examined
                children's perceptions on the robot's attributions,
                collaboration and social role. Results indicate that a robot's
                cognitive reliability shapes the helping relationship between
                the children and the robot, while …
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
            triggerOpenedClassName={styles["collapsibleOpen"]}
            trigger="Artificial intelligence and the rights of the child: Towards an integrated agenda for research and policy"
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                This report proposes a set of science-for-policy future
                directions for AI and child’s rights. It connects research and
                policy to gain insights by the interplay among different
                stakeholders and to go beyond the identification of ethical
                guidelines towards methods for practical future implementations.
                For the formulation of the proposed directions, we considered
                the current relevant policy initiatives by major international
                organizations and the recent coordinated actions on AI by the
                European Commission as well as the state-of-the art of the
                scientific work on AI-based technologies for children with a
                focus on three applications, conversational agents, recommender
                systems and robotic systems. In addition, we took into
                consideration the results of two workshops with young people and
                three workshops with experts and policymakers that contributed
                to the formulation of a set of requirements, methods and
                knowledge gaps as an integrated agenda for research and policy
                on AI and the rights of the child.
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
            triggerOpenedClassName={styles["collapsibleOpen"]}
            trigger="The effects of robot cognitive reliability and social positioning on child-robot team dynamics"
          >
            <div className={styles["collapsibleInsert"]}>
              <p>
                Human collaboration is more likely to lead to cognitive growth
                when all group-members are actively involved in the
                collaborative process. However, there are cases that intragroup
                relationships need support. In this paper, we present an
                autonomous robotic system designed to interact with a pair of
                children in a problem-solving setting, aiming to understand how
                the robot behaviour impacts the group-members’ social dynamics.
                We developed an autonomous system with the Haru robot which we
                evaluated with an experimental study with 5-8yo children (N =84)
                to test the impact of the robot’s cognitive reliability and
                social positioning on human-to-human social dynamics, task
                performance and help-seeking behaviour. All participants took
                part in a baseline session (without the robot), an intervention
                (with the robot in a turn-taking setting) and an evaluation
                session (with a robot in a voluntary interaction setting).
                Results …
              </p>
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
