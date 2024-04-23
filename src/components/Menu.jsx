/* eslint-disable react/no-unescaped-entities */
import { Dish } from "./Dish";
import { dishData } from "../data/dishData.json";
const Menu = () => {
  const dishes = dishData;
  const numDishes = dishes.length;

  return (
    <main className="menu">
      <h2>The menu</h2>

      {numDishes > 0 ? (
        <>
          <p>
            From pipettes to spatulas, Abbie's transition from biomedical labs
            to kitchen labs has been seamless. Raised in a Hunanese family, she
            developed a passion for recreating the fiery and tantalizing
            flavours of her heritage. As a recognised food hunter among friends,
            you just need to trust her definition of deliciousness. Step into
            Abbie's kitchen, a place where food soothes the soul and laughter
            abounds!
          </p>
          <ul className="dishes">
            {dishes.map((dish) => (
              <Dish key={dish.name} dishObj={dish} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
