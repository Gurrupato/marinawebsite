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
import { Bio } from "./components/bio/bio";
import { Sidebar } from "./components/sidebar/sidebar";

const App = () => {
  const [key, setKey] = useState(0);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setKey((prevKey) => prevKey + 1);
    console.log(lng);
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
                  className={styles["langButtonEn"]}
                  onClick={() => changeLanguage("en")}
                ></button>
                <button
                  className={styles["langButtonEs"]}
                  onClick={() => changeLanguage("es")}
                ></button>
              </div>
              <Navbar></Navbar>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Studies" element={<Studies />} />
                <Route path="/Bio" element={<Bio />} />
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
