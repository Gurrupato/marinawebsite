import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import imagen from "../../images/rol.png";

export const Navbar = () => {
  const { t } = useTranslation();
  const [apartado, setApartado] = useState();
  const [navbarOpen, setNavbarOpen] = useState(false);
  //_________________________________________________________________________
  const [rol, setRol] = useState("close");

  const MyComponent = () => {
    const [keySequence, setKeySequence] = useState([]);
    const sequenceToMatch = ["r", "o", "l"];
    const timeLimit = 2000; // tiempo en milisegundos (2 segundos en este caso)

    useEffect(() => {
      const handleKeyPress = (event) => {
        setKeySequence((prevSequence) =>
          [...prevSequence, event.key].slice(-3)
        ); // Mantener solo las últimas 3 teclas
      };

      window.addEventListener("keydown", handleKeyPress);

      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }, []);

    useEffect(() => {
      if (keySequence.length === 3) {
        const isMatch = sequenceToMatch.every(
          (key, index) => key === keySequence[index]
        );

        if (isMatch) {
          myFunction();
        }

        // Restablece la secuencia después de un tiempo límite
        const timeout = setTimeout(() => setKeySequence([]), timeLimit);

        return () => clearTimeout(timeout);
      }
    }, [keySequence]);

    const myFunction = () => {
      console.log("Secuencia R, O, L detectada");
      setRol("open");
    };
  };
  MyComponent();

  //_________________________________________________________________________

  const handleNavbar = () => {
    navbarOpen ? setNavbarOpen(false) : setNavbarOpen(true);
    console.log(navbarOpen);
  };

  const location = useLocation();

  useEffect(() => {
    setApartado(location.pathname);
  });

  return (
    <div className={styles["navbarContainer"]}>
      <div className={styles["navbar"]}>
        <Link
          to="/"
          className={
            apartado == "/"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Home")}
        </Link>
        <Link
          to="/Studies"
          className={
            apartado == "/Studies"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Studies")}
        </Link>
        <Link
          to="/PrevWork"
          className={
            apartado == "/PrevWork"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("PrevWork")}
        </Link>
        <Link
          to="/Research"
          className={
            apartado == "/Research"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Research")}
        </Link>
        <Link
          to="/Publications"
          className={
            apartado == "/Publications"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Publications")}
        </Link>
      </div>
      <button
        className={styles["navbarButton"]}
        onClick={() => {
          handleNavbar();
        }}
      >
        | | |
      </button>
      <div
        className={navbarOpen ? styles["navbarMobile"] : styles["navbarClose"]}
      >
        <Link
          onClick={() => {
            handleNavbar();

            setApartado("Home");
            console.log("Home");
          }}
          to="/"
          className={
            apartado == "Home"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Home")}
        </Link>

        <Link
          onClick={() => {
            handleNavbar();

            setApartado("Studies");
            console.log("Studies");
          }}
          to="/Studies"
          className={
            apartado == "Studies"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Studies")}
        </Link>
        <Link
          onClick={() => {
            handleNavbar();

            setApartado("prevWork");
            console.log("prevWork");
          }}
          to="/prevWork"
          className={
            apartado == "prevWork"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("PrevWork")}
        </Link>
        <Link
          onClick={() => {
            handleNavbar();
            setApartado("Research");
            console.log("Research");
          }}
          to="/Research"
          className={
            apartado == "Research"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Research")}
        </Link>
        <Link
          onClick={() => {
            handleNavbar();

            setApartado("Publications");
            console.log("Publications");
          }}
          to="/Publications"
          className={
            apartado == "Publications"
              ? styles["navbarButtonsActivo"]
              : styles["navbarButtons"]
          }
        >
          {t("Publications")}
        </Link>
      </div>
      <div className={rol === "open" ? styles["rolOpen"] : styles["rolClose"]}>
        <div className={styles["navbarUnder"]}>
          <img src={imagen}></img>
        </div>

        <div>ME GUSTA EL ROL</div>

        <div>
          <button onClick={() => setRol("close")}>CLOSE</button>
        </div>
      </div>
    </div>
  );
};
