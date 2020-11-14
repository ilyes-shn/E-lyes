import {useContext, createContext, useReducer} from 'react'

const dataContext = createContext();

const initialState = {
  basket: [],
  user: null
}

const Reducer = (state,action) => {
  switch (action.type) {
    case 'add': return {
      ...state,
      basket: [...state.basket, action.item]
    }
      break;
    case 'remove':
    const index = action.id
    let newBasket = [...state.basket]
    if (index >= 0){
      newBasket.splice(index, 1);
    }
    return {
      ...state,
      basket: newBasket
    }
      break;
    case 'user': return {
      ...state,
      user: action.user
    }
      break;
    default: return state
  }
}


export const Provider = ({children}) => {
  return (
    <dataContext.Provider value={useReducer(Reducer,initialState)}>
      {children}
    </dataContext.Provider>
  )
}

export const useData = () => useContext(dataContext)
