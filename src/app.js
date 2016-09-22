import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

import Countries from './components/Countries';


ReactDOM.render(
  <div>
  <Countries label="Countries"/>
  </div>,
  document.getElementById('example')
);