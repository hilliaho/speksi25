// eslint-disable-next-line react/prop-types
const DecoratedHeader = ({firstLetter, headerText}) => {
  return (
    <div className="decorated-header">
      <img src={firstLetter} alt="Koristeellinen E-kirjain" />
      <span className="decorated-header-text">{headerText}</span>
    </div>
  );
};

export default DecoratedHeader;
