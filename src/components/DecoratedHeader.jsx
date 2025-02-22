// eslint-disable-next-line react/prop-types
const DecoratedHeader = ({firstLetter, headerText}) => {
  let header = headerText.slice(1);

  return (
    <div className="decorated-header">
      <img src={firstLetter} alt="Koristeellinen E-kirjain" />
      <span className="decorated-header-text">{header}</span>
    </div>
  );
};

export default DecoratedHeader;
