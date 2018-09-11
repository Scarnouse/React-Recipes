import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import data from './data/recipes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  < Menu recipes={data}
    title="Delicious Recipes" />, 
  document.getElementById('root')
);
registerServiceWorker();
