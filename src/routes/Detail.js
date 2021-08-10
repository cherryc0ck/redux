import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h1>Created at: {toDo?.id}</h1>
    </>
  )
}

function mapStateToProps(state, ownProps){
  const {
    match: {
      params: {id}
    }
  } = ownProps;
  console.log(id);
  return {toDo:state.find(toDo=> toDo.id === parseInt(id))}
}

export default connect(mapStateToProps)(Detail);