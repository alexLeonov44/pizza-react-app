import React from 'react';

import Headers from './components/Headers';
import Home from './pages/Home';
import Cart from './pages/Cart';

import { Route } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { getPizzas, setLoadedAC, setPizzasAC } from './redux/actions/pizzas';
import { getPizzasData } from './api/api';

export default function App() {
  const dispatch = useDispatch();
  const {filters , cart} = useSelector(state=> state);
  
  React.useEffect(() => {
   dispatch(getPizzas(filters))
  },[filters]);
  return (
    <div className="wrapper">
      {/* <Headers totalCount={cart.totalCount}/> */}
      <div className="content">
        <Route exact path="/">
          <Home dispatch={dispatch} />
        </Route>

        <Route exact path="/cart" render={() => <Cart addedPizzas={cart.items} totalCount={cart.totalCount}/>} />
      </div>
    </div>
  );
}

/* const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters:state.filters
  };
};
const mapSispatchToProps = (dispatch) => {
  
  return {
    dispatchPizzas: (items) => dispatch(setPizzasAC(items)),  //this function that get items and call dispath from store and nest there action
    setPizzasCategory: (catIndex) => dispatch(setCategoryAction(catIndex)),
     setPizzaSortBy: (sortBy) => dispatch(setSortByAction(sortBy)),
  };
};
export default connect(mapStateToProps, mapSispatchToProps)(App); */

// class App extends React.Component {
//   componentDidMount(){
//     axios('http://localhost:3000/db.json').then(({data}) =>{
//       this.props.dispatchPizzas(data.pizzas)
//     })
//   }
//    render(){
//      return (
//       <div className="wrapper">
//              <Headers />
//              <div className="content">
//                <Route exact path="/">
//                  <Home  items={this.props.items} setPizzasCategory={this.props.setPizzasCategory}/>
//                </Route>

//                <Route exact path="/cart" render={()=>  <Cart />}/>

//              </div>
//            </div>
//      )
//    }
// }

//   React.useEffect(() => {
//     fetch('http://localhost:3000/db.json')
//       .then((response) => response.json())
//       .then((json) => setPizzas(json.pizzas));
//   }, []);
