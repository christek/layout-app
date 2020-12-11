import React from 'react';
import ReactDOM from 'react-dom';

import styles from './app.scss'; // different import compared to stylesheets

const App = () => (
  <div className={styles.danger}>
    <h1>Hello there</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
