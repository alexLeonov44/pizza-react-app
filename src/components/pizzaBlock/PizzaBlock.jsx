import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addPizzaCartAC } from '../../redux/actions/cart';

export default function PizzaBlock({ name, imageUrl, price, sizes, types, pizzasInCart }) {
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const selectedPizza = {
    name,
    id:Math.floor(Math.random() * 1000),
    totalCount: 1,
    imageUrl,
    price,
    sizes: activeSize,
    types: activeType,
  };

  const getPizzasTotalCount = (pizzasInCart, name) => {
    let totalPizzas = null;
    pizzasInCart.forEach((el) => {
      if (el.name === name) {
        totalPizzas += el.totalCount;
      }
    });

    if (totalPizzas) {
      return totalPizzas;
    } else {
      return 0;
    }
  };
  
  const dispatch = useDispatch();
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          <li
            onClick={() => setActiveType(0)}
            className={classNames({ active: activeType === 0, disabled: !types.includes(0) })}>
            тонкое
          </li>
          <li
            onClick={() => setActiveType(1)}
            className={classNames({ active: activeType === 1, disabled: !types.includes(1) })}>
            традиционное
          </li>
        </ul>
        <ul>
          <li
            onClick={() => setActiveSize(26)}
            className={classNames({ active: activeSize === 26, disabled: !sizes.includes(26) })}>
            26 см.
          </li>
          <li
            onClick={() => setActiveSize(30)}
            className={classNames({ active: activeSize === 30, disabled: !sizes.includes(30) })}>
            30 см.
          </li>
          <li
            onClick={() => setActiveSize(40)}
            className={classNames({ active: activeSize === 40, disabled: !sizes.includes(40) })}>
            40 см.
          </li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <button onClick={() => dispatch(addPizzaCartAC(selectedPizza))}>Добавить</button>
          <i>{getPizzasTotalCount(pizzasInCart, name)}</i>
        </div>
      </div>
    </div>
  );
}
