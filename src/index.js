import {createStore} from 'redux';
import { count } from 'yargs';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

const countModifier = (state = 0) => {
  return count;
}

const countStore = createStore(countModifier);
console.log(countStore.getState());