

import {ADD_COLUMN, ADD_CARD} from './actions';


const initialState = {
  columns: null,
  cards: null
}

export const reducer = (state = initialState, action) => {
  switch (action.TYPE){
    case ADD_COLUMN:
      return {...state, columns: [...columns, action.payload]};
    case ADD_CARD:
      return {...state, cards: [...cards, action.payload]};
    default:
      return {...state}
  }
}
