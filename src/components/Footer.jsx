import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //   else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p className="openTime">
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
      <p className="copyRight">© 2024 All rights reserved by Abbie Duan</p>
    </footer>
  );
};

export default Footer;
