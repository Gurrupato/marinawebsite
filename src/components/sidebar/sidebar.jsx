import React from "react";
import styles from "./sidebar.module.css";
import img from "../../images/marinaPicture.png";
import linkedin from "../../images/linkedin.png";
import gmail from "../../images/gmail.png";
import twitter from "../../images/twitter.png";
import github from "../../images/github.png";
import scholar from "../../images/scholar.png";

import orcid from "../../images/orcid.png";

export const Sidebar = () => {
  return (
    <div className={styles["sidebarContainer"]}>
      <div className={styles["sidebarImageContainer"]}>
        <img src={img} alt="Fotografia de Perfil de Marina Escobar"></img>
      </div>
      <div className={styles["nameContainer"]}>Marina Escobar-Planas</div>
      <div className={styles["linkContainer"]}>
        <img className={styles["gmailIMG"]} src={gmail}></img>
        <a
          className={styles["link"]}
          target="_blank"
          href="mailto:marescplajob@gmail.com"
        >
          Email
        </a>
      </div>
      <div className={styles["linkContainer"]}>
        <img className={styles["linkedinIMG"]} src={twitter}></img>{" "}
        <a
          className={styles["link"]}
          target="_blank"
          href="https://x.com/marescpla?t=WxXRvZZ4vVj8Y6XzopMzag&s=08 "
        >
          Twitter
        </a>
      </div>
      <div className={styles["linkContainer"]}>
        <img className={styles["linkedinIMG"]} src={linkedin}></img>{" "}
        <a
          className={styles["link"]}
          target="_blank"
          href="https://www.linkedin.com/in/marina-escobar-planas-739396b3/"
        >
          Linkedin
        </a>
      </div>
      {/* <div className={styles["linkContainer"]}>
        <img className={styles["linkedinIMG"]} src={github}></img>{" "}
        <a
          className={styles["link"]}
          href="https://www.linkedin.com/in/marina-escobar-planas-739396b3/"
        >
          Github
        </a>
      </div> */}
      <div className={styles["linkContainer"]}>
        <img className={styles["linkedinIMG"]} src={scholar}></img>{" "}
        <a
          className={styles["link"]}
          target="_blank"
          href="https://scholar.google.es/scholar?hl=es&as_sdt=0%2C5&q=marina+escobar+planas&btnG="
        >
          Google Scholar
        </a>
      </div>
      <div className={styles["linkContainer"]}>
        <img className={styles["linkedinIMG"]} src={orcid}></img>{" "}
        <a
          className={styles["link"]}
          target="_blank"
          href="https://orcid.org/0000-0002-4513-020X"
        >
          ORCID
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
