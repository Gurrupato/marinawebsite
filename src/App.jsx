import { I18nextProvider } from "react-i18next";
import "./App.css";
import styles from "./app.module.css";
import { useState } from "react";
import { Navbar } from "./components/navbar/navbar";
import i18n from "./traducciones/i18n";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Home } from "./components/home/home";
import { Studies } from "./components/studies/studies";
import { Research } from "./components/research/research";
import { Publications } from "./components/publications/publications";
import { Sidebar } from "./components/sidebar/sidebar";
import { Prevwork } from "./components/prevWork/prevWork";

const App = () => {
  const [key, setKey] = useState(0);
  const [selectedLanguaje, setSelectedLanguaje] = useState(navigator.language);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setKey((prevKey) => prevKey + 1);
    console.log(lng);
    setSelectedLanguaje(lng);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename="/">
        <div className={styles["App"]}>
          <div className={styles["mainInformationContainer"]}>
            <Sidebar></Sidebar>
            <div className={styles["secondaryInformationContainer"]}>
              <div className={styles["langButtonContainer"]}>
                <button
                  className={
                    selectedLanguaje === "en"
                      ? styles["langButtonEnSelected"]
                      : styles["langButtonEn"]
                  }
                  onClick={() => {
                    changeLanguage("en");
                  }}
                ></button>
                <button
                  className={
                    selectedLanguaje === "es"
                      ? styles["langButtonEsSelected"]
                      : styles["langButtonEs"]
                  }
                  onClick={() => {
                    changeLanguage("es");
                  }}
                ></button>
              </div>
              <Navbar></Navbar>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Studies" element={<Studies />} />
                <Route path="/PrevWork" element={<Prevwork />} />
                {/* <Route path="/Bio" element={<Bio />} /> */}
                <Route path="/Research" element={<Research />} />
                <Route path="/Publications" element={<Publications />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
