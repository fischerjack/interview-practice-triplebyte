import React from 'react';
import {Card} from '../Card/Card';

export const Column = props => {
  return (
    <div style={{}}>
      {props.cards.map((card, index) => {
        <Card />
      })}
      {/* <form>
        <input id='title' name='title'/>
        <textarea id='body' name='body' rows='3'/>
        <input type='submit' value='Add Card'/>
      </form> */}
    </div>
  );
}
