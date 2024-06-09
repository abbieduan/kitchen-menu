import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export function Dish({ dishObj }) {
  const fullHeart = dishObj.recommendation;

  return (
    <li className={`dish ${dishObj.soldOut ? "sold-out" : ""}`}>
      <img src={dishObj.photoName} alt={dishObj.name} />
      <div>
        <h3 className="chineseName">{dishObj.chineseName}</h3>
        <h3 className="englishName">{dishObj.name}</h3>
        <p>{dishObj.ingredients}</p>
        <span className="recommendation">
          {[...Array(fullHeart)].map((_, index) => (
            <FontAwesomeIcon key={index} icon={faHeart} className="icon" />
          ))}
        </span>
      </div>
    </li>
  );
}

Dish.propTypes = {
  dishObj: PropTypes.shape({
    photoName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    chineseName: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    soldOut: PropTypes.bool.isRequired,
    recommendation: PropTypes.number.isRequired,
  }).isRequired,
};
