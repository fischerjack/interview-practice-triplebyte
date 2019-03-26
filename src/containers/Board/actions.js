import {uuidv1} from 'uuid';

export const ADD_COLUMN = 'ADD_COLUMN';
export const ADD_CARD = 'ADD_CARD';

const addColumnSuccess = payload => {
  return {
    type: ADD_COLUMN,
    payload
  }
}

const addCardSuccess = payload => {
  return {
    type: ADD_CARD,
    payload
  }
}

export const addColumn = dispatch => {
  const uniqueId = uuidv1();
  dispatch(addColumnSuccess(uniqueId));
}

export const addCard = data => dispatch => {
  const card = {
    columnId: data.columnId,
    title: data.title,
    body: data.body
  }
  dispatch(addCardSuccess(card));
}