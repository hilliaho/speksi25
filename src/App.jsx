import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Minä olen Puu</h1>
      <a href="https://lippu.fi">Osta liput</a>
      <p>
        Alussa oli Suuri Sotka. Sotka sanoi, “nyt tulee muna!” ja muna tuli.
        Munasta kuoriutui maailma. Maailma oli kaunis, kunnes sen valtasi
        ahneus. Ahneus riitautti maailman kansat, ja Sotka oli pettynyt
        luomuksiinsa. Täten hän pakeni Kokkelivuorille munimaan toisen munan,
        josta vielä jonain päivänä kuoriutuisi uusi, parempi maailma. Eräs kansa
        pakeni konfliktia taikakuvun alle, josta kukaan ei enää päässyt läpi.
        Tämän Kupulan asukkaat elivät rauhassa tuhansia vuosia, suojassa kuvun
        takaisilta Ulkopuolisilta. Muuan Puu ja Puska ovat kautta aikain
        seuranneet Kupulan Velhotornin rauhaisaa elämää, kunnes valtakunnassa
        alkaa tapahtumaan ennennäkemättömiä asioita; Suur-Velho muuttuu pupuksi
        ja taikakuvusta löytyy aukko. Voivatko rakkaat velhomme Simppa sekä
        Kataja pysäyttää apulaistensa kanssa Kupulaa uhkaavat voimat ja
        sammuttaa tämän herkästi syttyvän katastrofin kipinät?
      </p>
      <h2>Esitysajat</h2>
      <ul>
        <li>Torstai 3.4. klo 19:00 (Ensi-ilta)</li>
        <li>Lauantai 5.4. 13:00</li>
        <li>Maanantai 7.4. 19:00</li>
        <li>Tiistai 8.4. 19:00</li>
        <a href="https://lippu.fi">Lippukauppaan</a>
      </ul>
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
      <h2>Traileri</h2>
      <a href="https://youtube.com">Youtube</a>
      <h2>Hahmot</h2>
      <p>Kuvat: Kuvaaja Kuvaajainen ?</p>
      <p>Editointi: Editoija Editoijanen ?</p>
      <a href="https://instagram.com">Instagram</a>
      <p>Lisätiedot: kumpulanspeksi@gmail.com</p>
      <p>Sponsorien logot ?</p>
    </>
  );
}

export default App;
