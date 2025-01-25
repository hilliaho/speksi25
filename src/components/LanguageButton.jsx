import infoJson from "../../info.json";

const LanguageButton = ({ language, setLanguage, setInfo }) => {
  let buttonLabel = "In English";
  if (language === "en") {
    buttonLabel = "Suomeksi";
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
    <div>
      <button onClick={() => handleLanguageChange()}>{buttonLabel}</button>
    </div>
  );
};

export default LanguageButton;
