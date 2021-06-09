import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app.scss'
import App from './App';

import {BrowserRouter as Router} from "react-router-dom";
import store from './redux/store'
import {Provider} from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 


let pizzas = [
  {
    "id": 0,
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    "name": "Пепперони Фреш с перцем",
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 803,
    "category": 4,
    "rating": 4
  },
  {
    "id": 1,
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    "name": "Сырная",
    "types": [0],
    "sizes": [26, 40],
    "price": 245,
    "category": 1,
    "rating": 6
  },
  {
    "id": 1,
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    "name": "Сырная",
    "types": [0],
    "sizes": [26, 40],
    "price": 245,
    "category": 1,
    "rating": 6
  },
]



