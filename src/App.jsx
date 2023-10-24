import { I18nextProvider } from "react-i18next";
import "./App.css";
import styles from "./app.module.css";
import { useState } from "react";
import { Navbar } from "./components/navbar/navbar";
import i18n from "./traducciones/i18n";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Home } from "./components/home/home";
import { Studies } from "./components/studies/studies";

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
          {/* Language buttons */}
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
          </Routes>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
