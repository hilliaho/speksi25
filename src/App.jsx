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
import cKirjain from "./assets/title-letters_C.svg";
import eKirjain from "./assets/title-letters_E.svg";
import gKirjain from "./assets/title-letters_G.svg";
import hKirjain from "./assets/title-letters_H.svg";
import lKirjain from "./assets/title-letters_L.svg";
import rKirjain from "./assets/title-letters_R.svg";
import sKirjain from "./assets/title-letters_S.svg";
import tKirjain from "./assets/title-letters_T.svg";
import headerImage from "./assets/website-header.png";
import title from "./assets/title-v1.png";
import DecoratedHeader from "./components/DecoratedHeader";

const App = () => {
  const [language, setLanguage] = useState("fi");
  const [info, setInfo] = useState(infoJson.fi);
  const [authored, setAuthored] = useState(false);
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
          <div className="main">
            <div className="right-container">
              <LanguageButton
                language={language}
                setLanguage={setLanguage}
                setInfo={setInfo}
              />
            </div>
            <img src={title} alt="Otsikko Minä olen Puu" />
            <img
              src={headerImage}
              alt="kupulan kylä, jonka keskellä on velhotorni"
            />
            <p>{info.synopsis}</p>
            <div className="ticket-button">
              <a href="https://lippu.fi">{info.ostaLiput}</a>
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
                <DecoratedHeader
                  firstLetter={eKirjain}
                  headerText={"sitysajat"}
                />
                <ul>
                  <li>{info.esitysajat[0]}</li>
                  <li>{info.esitysajat[1]}</li>
                  <li>{info.esitysajat[2]}</li>
                  <li>{info.esitysajat[3]}</li>
                </ul>
              </div>
            </div>
            <a href="https://lippu.fi">{info.ostaLiput}</a>
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
                <DecoratedHeader firstLetter={lKirjain} headerText={"iput"} />
                <table>
                  <tr>
                    <th>{info.hinnat.opiskelija.rooli}</th>
                    <th>{info.hinnat.opiskelija.hinta}</th>
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
            <p>{info.lippuohjeet}</p>
            <div className="content-row">
              <div className="image-column">
                <img className="wand-image" src={wand} alt="taikasauva" />
              </div>
              <div className="content-column">
                <DecoratedHeader
                  firstLetter={rKirjain}
                  headerText={"yhmäliput"}
                />
                <table>
                  <tr>
                    <th>{info.ryhmalippuhinnat.opiskelija.rooli}</th>
                    <th>{info.ryhmalippuhinnat.opiskelija.hinta}</th>
                  </tr>
                  <tr>
                    <th>{info.ryhmalippuhinnat.perus.rooli}</th>
                    <th>{info.ryhmalippuhinnat.perus.hinta}</th>
                  </tr>
                </table>
              </div>
            </div>
            <p>{info.ryhmalippuohjeet}</p>
            <DecoratedHeader firstLetter={hKirjain} headerText={"ahmot"} />
            <p>{info.kuvat}: Kuvaaja Kuvaajainen ?</p>
            <p>{info.editointi}: Editoija Editoijanen ?</p>
            <DecoratedHeader firstLetter={tKirjain} headerText={"raileri"} />
            <a href="https://youtube.com">Youtube</a>
            <a href="https://instagram.com">Instagram</a>
            <p>{info.lisatiedot}: kumpulanspeksi@gmail.com</p>
            <p>Sponsorien logot ?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
