import React from 'react';
import { useSelector } from 'react-redux';

import Categories from '../components/Categories';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import PizzasLoadingBlock from '../components/pizzaBlock/PizzasLoadingBlock';
import SortPopup from '../components/SortPopup';
import cart from '../redux/reducers/cart';

export default function Home() {
  const state = useSelector((state) => {
    return {
      items: state.pizzas.items,
      filters: state.filters,
      cart:state.cart,
      isLoaded: state.pizzas.isLoaded,
    };
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={[
            { name: 'Мясные', id: 1 },
            { name: 'Вегетарианская', id: 2 },
            { name: 'Гриль', id: 3 },
            { name: 'Острые', id: 4 },
            { name: 'Закрытые', id: 5 },
          ]}
          filters={state.filters}
        />
        <SortPopup
          items={[
            { sort: 'Популярности', type: 'rating', id: 0 },
            { sort: 'Цене', type: 'price', id: 1 },
            { sort: 'Алфавиту', type: 'name', id: 2 },
          ]}
          filters={state.filters}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {state.isLoaded ? (
          state.items.map((item) => <PizzaBlock key={item.id} {...item} pizzasInCart = {state.cart.items} />))
           : 
         Array(12).fill(0).map((_,index)=><PizzasLoadingBlock key={index}/>)
        }
      </div>
    </div>
  );
}
