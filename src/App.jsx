import "./App.css";
import { useState, useEffect } from "react";
import infoJson from "../info.json";
import LanguageButton from "./components/LanguageButton";
import tower from "./assets/web-graphics-tower.webp";
import tree from "./assets/web-graphics-tree.webp";
import treeOpenEyes from "./assets/web-graphics-tree-with-eye.webp";
import hat from "./assets/web-graphics-wizard-hat.webp";
import wand from "./assets/web-graphics-wand.webp";
/*import cKirjain from "./assets/title-letters-light-bg_C.svg";*/
import eKirjain from "./assets/title-letters-light-bg_E.svg";
import gKirjain from "./assets/title-letters-light-bg_G.svg";
/*import hKirjain from "./assets/title-letters-light-bg_H.svg";*/
import lKirjain from "./assets/title-letters-light-bg_L.svg";
import rKirjain from "./assets/title-letters-light-bg_R.svg";
import sKirjain from "./assets/title-letters-light-bg_S.svg";
import tKirjain from "./assets/title-letters-light-bg_T.svg";
import headerImage from "./assets/Dome.webp";
import title from "./assets/title.webp";
import DecoratedHeader from "./components/DecoratedHeader";
import TicketsButton from "./components/TicketsButton";
import unisport from "./assets/unisport.png";
import loimu from "./assets/loimu.png";
import punanaamio from "./assets/punanaamio.png";
import tek from "./assets/tek.png";
import nuta from "./assets/nuta.jpg";
import limes from "./assets/limes.png";
import speksi from "./assets/kumpulanspeksi_logo.png";
import GamePage from "./components/GamePage";

const App = () => {
  const [language, setLanguage] = useState("fi");
  const [info, setInfo] = useState(infoJson.fi);
  const [treeImage, setTreeImage] = useState(tree);
  const [page, setPage] = useState("info");

  useEffect(() => {
    const interval = setInterval(() => {
      setTreeImage((prevImage) => (prevImage === tree ? treeOpenEyes : tree));
    }, 5000);

    return () => clearInterval(interval);
  });

  if (page === "info") {
    return (
      <div>
        <div className="side-pattern"></div>
        <div className="title-container">
          <div className="language-button-container">
            <LanguageButton
              language={language}
              setLanguage={setLanguage}
              setInfo={setInfo}
            />
          </div>
          <img
            className="header-text"
            src={title}
            alt="Otsikko Minä olen Puu"
          />
          <img
            className="header-image"
            src={headerImage}
            alt="kupulan kylä, jonka keskellä on velhotorni"
          />
        </div>
        <div className="main">
          <div className="synopsis">
            <p>{info.synopsis[0]}</p>
            <p>{info.synopsis[1]}</p>
            <p>{info.synopsis[2]}</p>
            <p>{info.synopsis[3]}</p>
            <p>{info.synopsis[4]}</p>
          </div>
          <p className="language-info">{info.kielitieto}</p>
          <div className="ticket-button">
            <TicketsButton language={language} />
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
          <div className="address">
            <span className="address-line">{info.esityspaikka}</span>
            <span className="address-line">{info.osoite}</span>
          </div>
          <div className="content-row-2">
            <div className="content-column">
              <p>{info.saapumisohjeet}</p>
            </div>
            <div className="image-column">
              <img src={tower} alt="velhotorni" />
            </div>
          </div>
          <h2>{info.otsikkoEsteettomyys}</h2>
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
          <TicketsButton language={language} />
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
          {/*
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
            */}
          <div className="trailer-container">
            <DecoratedHeader
              firstLetter={tKirjain}
              headerText={info.otsikkoTraileri}
            />
            <div className="trailer">
              <iframe
                src="https://www.youtube.com/embed/74Sy5ktUnuQ?si=lONEIPW82IbqieCx"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="follow">
            <div className="content-row">
              <div className="content-column">
                <a href="https://kumpulanspeksi.fi/jarjesto/">
                  <img
                    className="speksi-logo"
                    src={speksi}
                    alt="Kumpulan Speksi logo"
                  />
                </a>
              </div>
              <div className="content-column">
                <h2>{info.seuraaOtsikko}</h2>
                <a href="https://www.instagram.com/kumpulanspeksi/">
                  Instagram: @kumpulanspeksi
                </a>
                <a href="https://www.tiktok.com/@kumpulanspeksi">
                  TikTok: @kumpulanspeksi
                </a>
                <a href="https://kumpulanspeksi.fi/jarjesto/">
                  {info.nettisivut}
                </a>
                <p>{info.lisatiedot}</p>
              </div>
            </div>
          </div>
          <div className="logo-row">
            <img className="logo-image" src={tek} alt="TEK logo" />
            <img className="logo-image" src={loimu} alt="Loimu logo" />
            <img className="logo-image" src={limes} alt="Limes logo" />
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
          <div className="tek-info">
            <p>{info.tekTeksti[0]}</p>
            <p>{info.tekTeksti[1]}</p>
            <p>{info.tekTeksti[2]}</p>
            <span>{info.tekTeksti[3]}</span>
            <a href={info.tekLinkki}>{info.tekTeksti[4]}</a>
          </div>
          <div className="game-info">
            <button
              onClick={() => {
                setPage("games");
              }}
            >
              Jäitkö kaipaamaan jotain? Huvittele pelisivullamme!
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (page === "games") {
    return (
      <div>
        <GamePage />
        <button
          className="games-back-button"
          onClick={() => {
            setPage("info");
          }}
        >
          Täältä pääset takaisin sinne mistä tulit
        </button>
      </div>
    );
  }
};

export default App;
