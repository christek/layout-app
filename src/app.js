import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import styles from './app.scss';

const initialState = {
  value: 0
};

function counterReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
}

// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic
const store = createStore(counterReducer);

// Our "user interface" is some text in a single HTML element
const valueEl = document.getElementById("value");

// Whenever the store state changes, update the UI by
// reading the latest store state and showing new data
function render() {
  const state = store.getState();
  valueEl.innerHTML = state.value.toString();
}

// Update the UI with the initial data
render();
// And subscribe to redraw whenever the data changes in the future
store.subscribe(render);

function inc() {
  console.log('inc');
}

function dec() {
  console.log('dec');
}

const App = () => (
  <div className={styles.danger}>
    <div>
      <p>
        Clicked:
        <span id="value">0</span>
        times
        <button type="button" id="increment" onClick={inc}>
          +
        </button>
        <button type="button" id="decrement">
          -
        </button>
        <button type="button" id="incrementIfOdd">
          Increment if odd
        </button>
        <button type="button" id="incrementAsync">
          Increment async
        </button>
      </p>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
