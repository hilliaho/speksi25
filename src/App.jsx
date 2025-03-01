import "./App.css";
import { useState, useEffect } from "react";
import infoJson from "../info.json";
import LanguageButton from "./components/LanguageButton";
import Login from "./components/Login";
import tower from "./assets/web-graphics-tower.png";
import tree from "./assets/web-graphics-tree.png";
import treeOpenEyes from "./assets/web-graphics-tree-with-eye.png";
import hat from "./assets/web-graphics-wizard-hat.png";
import wand from "./assets/web-graphics-wand.png";
import cKirjain from "./assets/title-letters-light-bg_C.svg";
import eKirjain from "./assets/title-letters-light-bg_E.svg";
import gKirjain from "./assets/title-letters-light-bg_G.svg";
import hKirjain from "./assets/title-letters-light-bg_H.svg";
import lKirjain from "./assets/title-letters-light-bg_L.svg";
import rKirjain from "./assets/title-letters-light-bg_R.svg";
import sKirjain from "./assets/title-letters-light-bg_S.svg";
import tKirjain from "./assets/title-letters-light-bg_T.svg";
import headerImage from "./assets/website-header.png";
import title from "./assets/title.png";
import DecoratedHeader from "./components/DecoratedHeader";
import TicketsButton from "./components/TicketsButton";
import unisport from "./assets/unisport.png";
import loimu from "./assets/loimu.png";
import punanaamio from "./assets/punanaamio.png";
import tek from "./assets/tek.png";
import nuta from "./assets/nuta.jpg";
import speksi from "./assets/kumpulanspeksi_logo.png";

const App = () => {
  const [language, setLanguage] = useState("fi");
  const [info, setInfo] = useState(infoJson.fi);
  const [authored, setAuthored] = useState(true);
  const [treeImage, setTreeImage] = useState(tree);

  useEffect(() => {
    const interval = setInterval(() => {
      setTreeImage((prevImage) => (prevImage === tree ? treeOpenEyes : tree));
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      {!authored && (
        <div>
          <Login setAuthored={setAuthored} />
        </div>
      )}
      {authored && (
        <div>
          <div className="side-pattern"></div>
          <div className="title-container">
            <div className="right-container">
              <LanguageButton
                language={language}
                setLanguage={setLanguage}
                setInfo={setInfo}
              />
            </div>
            <img src={title} alt="Otsikko Minä olen Puu" />
            <img
              className="header-image"
              src={headerImage}
              alt="kupulan kylä, jonka keskellä on velhotorni"
            />
          </div>
          <div className="main">
            <p className="synopsis">{info.synopsis}</p>
            <div className="ticket-button">
              <TicketsButton info={info} />
            </div>
            <div className="content-row">
              <div className="image-column">
                <img
                  src={treeImage}
                  alt="puu"
                  onMouseOver={() => setTreeImage(treeOpenEyes)}
                  onMouseOut={() => setTreeImage(tree)}
                />
              </div>
              <div className="content-column">
                {language === "fi" && (
                  <DecoratedHeader
                    firstLetter={eKirjain}
                    headerText={info.otsikkoEsitysajat}
                  />
                )}
                {language === "en" && (
                  <DecoratedHeader
                    firstLetter={sKirjain}
                    headerText={info.otsikkoEsitysajat}
                  />
                )}
                <ul>
                  <li>{info.esitysajat[0]}</li>
                  <li>{info.esitysajat[1]}</li>
                  <li>{info.esitysajat[2]}</li>
                  <li>{info.esitysajat[3]}</li>
                </ul>
              </div>
            </div>
            <p>{info.kesto}</p>
            <p>{info.valiaika}</p>
            <div className="content-row">
              <div className="content-column">
                <p>{info.saapumisohjeet}</p>
              </div>
              <div className="image-column">
                <img src={tower} alt="velhotorni" />
              </div>
            </div>
            <p>{info.esityspaikka}</p>
            <p>{info.osoite}</p>
            <p>{info.esteettomyys}</p>
            <div className="content-row">
              <div className="content-column">
                {language === "fi" && (
                  <DecoratedHeader
                    firstLetter={lKirjain}
                    headerText={info.otsikkoLippujenHinnat}
                  />
                )}
                {language === "en" && (
                  <DecoratedHeader
                    firstLetter={tKirjain}
                    headerText={info.otsikkoLippujenHinnat}
                  />
                )}
                <table>
                  <tr>
                    <th>{info.hinnat.alennus.rooli}</th>
                    <th>{info.hinnat.alennus.hinta}</th>
                  </tr>
                  <tr>
                    <th>{info.hinnat.perus.rooli}</th>
                    <th>{info.hinnat.perus.hinta}</th>
                  </tr>
                  <tr>
                    <th>{info.hinnat.kannatus.rooli}</th>
                    <th>{info.hinnat.kannatus.hinta}</th>
                  </tr>
                </table>
              </div>
              <div className="image-column">
                <img src={hat} alt="velhohattu" />
              </div>
            </div>
            <TicketsButton info={info} />
            <p className="instruction-paragraph">{info.lippuohjeet}</p>
            <div className="content-row">
              <div className="image-column">
                <img className="wand-image" src={wand} alt="taikasauva" />
              </div>
              <div className="content-column">
                {language === "fi" && (
                  <DecoratedHeader
                    firstLetter={rKirjain}
                    headerText={info.otsikkoRyhmaliput}
                  />
                )}
                {language === "en" && (
                  <DecoratedHeader
                    firstLetter={gKirjain}
                    headerText={info.otsikkoRyhmaliput}
                  />
                )}
                <table>
                  <tr>
                    <th>{info.ryhmalippuhinnat.alennus.rooli}</th>
                    <th>{info.ryhmalippuhinnat.alennus.hinta}</th>
                  </tr>
                  <tr>
                    <th>{info.ryhmalippuhinnat.perus.rooli}</th>
                    <th>{info.ryhmalippuhinnat.perus.hinta}</th>
                  </tr>
                </table>
              </div>
            </div>
            <p className="instruction-paragraph">{info.ryhmalippuohjeet}</p>
            {language === "fi" && (
              <DecoratedHeader
                firstLetter={hKirjain}
                headerText={info.otsikkoHahmot}
              />
            )}
            {language === "en" && (
              <DecoratedHeader
                firstLetter={cKirjain}
                headerText={info.otsikkoHahmot}
              />
            )}
            <p>{info.kuvat}</p>
            <p>{info.editointi}</p>
            <DecoratedHeader
              firstLetter={tKirjain}
              headerText={info.otsikkoTraileri}
            />
            <a href="https://youtube.com">Youtube</a>
            <p>{info.lisatiedot}</p>
            <div className="content-row">
              <div className="content-column">
                <img src={speksi} alt="Kumpulan Speksi logo" />
              </div>
              <div className="content-column">
                <a href="https://kumpulanspeksi.fi/jarjesto/">
                  Speksin nettisivut
                </a>
                <p></p>
                <a href="https://instagram.com">Instagram</a>
                <p></p>
                <a href="https://www.tiktok.com/@kumpulanspeksi">TikTok</a>
              </div>
            </div>
            <div className="logo-row">
              <img className="logo-image" src={tek} alt="TEK logo" />
              <img className="logo-image" src={loimu} alt="Loimu logo" />
              <img className="logo-image" src={unisport} alt="Unisport logo" />
              <img
                className="logo-image"
                src={punanaamio}
                alt="Punanaamio logo"
              />
              <img
                className="logo-image"
                src={nuta}
                alt="Arabian nuorisotalo logo"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
