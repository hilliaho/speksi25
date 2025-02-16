import mKirjain from "../assets/m-kirjain.svg";

const DecoratedHeader = () => {
  return (
    <div className="koristeellinen-otsikko">
      <img src={mKirjain} alt="Koristeellinen M-kirjain" />
      <p>inä olen puu</p>
    </div>
  );
};

export default DecoratedHeader;
