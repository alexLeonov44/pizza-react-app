import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setCategoryAction } from '../redux/actions/filrers';

const Categories = ({ items , filters }) => {

  const dispatch = useDispatch();

  const clickOnCategories = (index) => {
     dispatch(setCategoryAction(index))
  };
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => clickOnCategories(null)}
          className={classNames({ active: filters.category === null })}>
          Все
        </li>
        {items &&
          items.map((item) => (
            <li
              onClick={() => clickOnCategories(item.id)}
              key={item.id}
              className={classNames({ active: filters.category === item.id })}>
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
