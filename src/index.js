import {createStore} from 'redux';
import { count } from 'yargs';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  if(action.type === "ADD"){
    return count +1;
  }else if (action.type === "MINUS"){
      return count -1;
  }else {
    return;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({type: "ADD" });
countStore.dispatch({type: "ADD" });
countStore.dispatch({type: "ADD" });
countStore.dispatch({type: "ADD" });
countStore.dispatch({type: "ADD" });
countStore.dispatch({type: "ADD" });
countStore.dispatch({type: "ADD" });
