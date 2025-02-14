import "./App.css";
import { useState } from "react";
import infoJson from "../info.json";
import LanguageButton from "./components/LanguageButton";
import mKirjain from "./assets/m-kirjain.svg";
import tower from "./assets/web-graphics-tower.png"

const App = () => {
  const [language, setLanguage] = useState("fi");
  const [info, setInfo] = useState(infoJson.fi);

  return (
    <div className="main">
      <LanguageButton
        language={language}
        setLanguage={setLanguage}
        setInfo={setInfo}
      />
      <div className="koristeellinen-otsikko">
        <img src={mKirjain} alt="Koristeellinen T-kirjain" />
        <p>inä olen puu</p>
      </div>
      <img src={tower} alt="velhotorni"/>
      <h1>{info.produktionimi}</h1>
      <div className="ticket-button">
        <a href="https://lippu.fi">{info.ostaLiput}</a>
      </div>
      <p>{info.synopsis}</p>
      <h2>{info.otsikkoEsitysajat}</h2>
      <ul>
        <li>{info.esitysajat[0]}</li>
        <li>{info.esitysajat[1]}</li>
        <li>{info.esitysajat[2]}</li>
        <li>{info.esitysajat[3]}</li>
      </ul>
      <a href="https://lippu.fi">{info.ostaLiput}</a>
      <p>{info.kesto}</p>
      <p>{info.valiaika}</p>
      <p>{info.saapumisohjeet}</p>
      <p>{info.esityspaikka}</p>
      <p>{info.osoite}</p>
      <p>{info.esteettomyys}</p>
      <h2>{info.otsikkoLippujenHinnat}</h2>
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
      <p>{info.lippuohjeet}</p>
      <h2>{info.otsikkoRyhmaliput}</h2>
      <p>{info.ryhmalippuohjeet}</p>
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
      <h2>{info.otsikkoHahmot}</h2>
      <p>{info.kuvat}: Kuvaaja Kuvaajainen ?</p>
      <p>{info.editointi}: Editoija Editoijanen ?</p>
      <h2>{info.otsikkoTraileri}</h2>
      <a href="https://youtube.com">Youtube</a>
      <a href="https://instagram.com">Instagram</a>
      <p>{info.lisatiedot}: kumpulanspeksi@gmail.com</p>
      <p>Sponsorien logot ?</p>
    </div>
  );
};

export default App;
