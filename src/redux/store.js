import { createStore , combineReducers, applyMiddleware, compose} from "redux"
import filterReduser from './reducers/filters'
import pizzasReducer from './reducers/pizzas'
import cartReduser from './reducers/cart'
import thunk from "redux-thunk"


const rootReduser = combineReducers({
  filters:filterReduser,  //по названию можно pizzaPage:pizzaReduser  --> import  filterReduser:filterReduser
  pizzas:pizzasReducer,  //store get state from redusers
  cart:cartReduser
})


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(rootReduser, enhancer);
store.subscribe(()=> console.log('change'))
window.store = store
export default store