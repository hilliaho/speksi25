import ticketsButton from '../assets/tickets-button.png'

const TicketsButton = ({ language }) => {
  if (language === "en") {
    return (
      <a
        className="tickets-button-en"
        href="https://kide.app/community/2b215950-7fed-4be9-8c2e-07d6d4d8996c"
      >PURCHASE TICKETS
      </a>
    )
  } else if (language === "fi") {
    return (
      <div
        className="tickets-button-fi"
      >
        <a
          href="https://kide.app/community/2b215950-7fed-4be9-8c2e-07d6d4d8996c"
        >
          <img
            src={ticketsButton} alt='Osta liput' />
        </a>
      </div>
    );
  }
};

export default TicketsButton;
