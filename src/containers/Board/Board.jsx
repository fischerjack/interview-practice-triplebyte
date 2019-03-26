import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { addColumn, addCard } from './actions';
import {Column} from '../../components/Column/Column';



const Board = (props) => {
  return (
    <Fragment>
      {props.columns.map((cardsInColumn, index) => {
        <Column cards={[...cardsInColumn]} key={index}/>
      })}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  columns: state.columns
});

const mapDispatchToProps = dispatch => ({
  addColumn: dispatch(addColumn),
  addCard: dispatch(addCard)
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);