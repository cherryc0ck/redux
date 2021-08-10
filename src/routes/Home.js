import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Home ({ toDos, ...rest}) {
  const [text, setText] = useState("");

  console.log(rest);
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e){
    e.preventDefault();
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        <li>{JSON.stringify(toDos)}</li>
      </ul>
    </>
  )
};

function mapStateToProps(state){
  return { toDos: state };
}

function mapDispatchToProps(dispatch){
  return { 
      addToDo: (text)=> dispatch(actionCreators.addToDo(text)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);