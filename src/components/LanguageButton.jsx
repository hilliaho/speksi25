import infoJson from "../../info.json";
import languageIcon from "../assets/language.png";

const LanguageButton = ({ language, setLanguage, setInfo }) => {
  let buttonLabel = "EN";
  if (language === "en") {
    buttonLabel = "FI";
  }

  const handleLanguageChange = () => {
    if (language === "fi") {
      setLanguage("en");
      setInfo(infoJson.en);
    } else {
      setLanguage("fi");
      setInfo(infoJson.fi);
      console.log("suomeks");
    }
  };

  return (
    <div className="language-button-row">
      <img className="language-icon" src={languageIcon} alt="language icon" />
      <button
        className="language-button"
        onClick={() => handleLanguageChange()}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default LanguageButton;
