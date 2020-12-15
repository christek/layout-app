import React from 'react';
import ReactDOM from 'react-dom';

import styles from './app.scss';

const App = () => (
  <div className={styles.danger}>
    <div>
      <p>
        Clicked:
        <span id="value">0</span>
        times
        <button type="button" id="increment">
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
