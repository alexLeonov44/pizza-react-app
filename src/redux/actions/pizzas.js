import { getPizzasData } from "../../api/api"


export const setPizzasAC = (items) =>({
    type:'SET_PIZZAS',
    payload:items,
})
export const setLoadedAC = (payload) =>({
    type:'SET_LOADED',
    payload,
})

export const getPizzas=(filters)=>{
      return (dispatch)=>{
        dispatch(setLoadedAC(false))
        getPizzasData(filters).then(( data ) => {
          dispatch(setPizzasAC(data));
        });
      }
}

