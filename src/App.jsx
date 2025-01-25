import "./App.css";
import infoJson from '../info.json'
import { useState } from "react";
import LanguageButton from "./components/LanguageButton";



const App = () => {
  const [info, setInfo] = useState(infoJson.fi)

  const handleLanguageChange = (language) => {
    if(language === 'fi') {
        setInfo(infoJson.fi)
    } else {
        setInfo(infoJson.en)
    }
  }

  return (
    <div className='main'>
      <LanguageButton handler={handleLanguageChange}/>
      <h1>Minä olen Puu</h1>
      <div className='ticket-button'>
        <a href="https://lippu.fi">Osta liput</a>
      </div>
      <p>
        {info.synopsis}
      </p>
      <h2>Esitysajat</h2>
      <ul>
        <li>{info.esitysajat[0]}</li>
        <li>{info.esitysajat[1]}</li>
        <li>{info.esitysajat[2]}</li>
        <li>{info.esitysajat[3]}</li>
      </ul>
      <a href="https://lippu.fi">Lippukauppaan</a>
      <p>Esitys kestää noin ? h ja sisältää 20 min väliajan. </p>
      <p>Väliajalla yleisö voi ostaa pientä syötävää ja juotavaa kahviosta.</p>
      <p>
        Saavuthan esityspaikalle hyvissä ajoin. Ovet aukeavat tuntia? ennen
        esityksen alkamisaikaa. Paikat täytetään vapaasti
        saapumisjärjestyksessä. Narikka on ilmainen ja vartioimaton. Ethän jätä
        arvotavaroita narikkaan. Kumpulan Speksi ry ei vastaa narikkaan
        jätetyistä ja kadonneista tavaroista.
      </p>
      <p>
        Osoite: Helsingin suomalainen yhteiskoulu (SYK)
        <br />
        Isonnevantie 8, 00320 Helsinki
      </p>
      <p>Esityssali ei valitettavasti ole esteetön.</p>
      <h2>Lippujen hinnat</h2>
      <table>
        <tr>
          <th>Opiskelija</th>
          <th>? €</th>
        </tr>
        <tr>
          <th>Perus</th>
          <th>? €</th>
        </tr>
        <tr>
          <th>Kannatus</th>
          <th>? €</th>
        </tr>
        <tr>
          <th>Ryhmä (opiskelija)</th>
          <th>? €</th>
        </tr>
        <tr>
          <th>Ryhmä (perus)</th>
          <th>? €</th>
        </tr>
      </table>
      <p>
        Emme lähtökohtaisesti palauta lippuostoksista rahoja, vaikka joutuisit
        perumaan tulosi. Ongelmatilanteissa ota yhteyttä ?
      </p>
      <p>
        Ryhmälippujen ostajat: Ilmoita meille sähköpostitse (?), montako henkeä
        excursiolle osallistuu ja näytöspäivämäärä, niin varaamme teille
        tarvittavan määrän lippuja/paikkoja salista.
      </p>
      <h2>Hahmot</h2>
      <p>Kuvat: Kuvaaja Kuvaajainen ?</p>
      <p>Editointi: Editoija Editoijanen ?</p>
      <h2>Traileri</h2>
      <a href="https://youtube.com">Youtube</a>
      <a href="https://instagram.com">Instagram</a>
      <p>Lisätiedot: kumpulanspeksi@gmail.com</p>
      <p>Sponsorien logot ?</p>
    </div>
  );
}

export default App;
