import PropTypes from "prop-types";

const Order = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

Order.propTypes = {
  closeHour: PropTypes.number.isRequired,
  openHour: PropTypes.number.isRequired,
};

export default Order;
