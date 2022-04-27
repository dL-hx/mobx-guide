import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import counter from './stores/counterStore';
import todo from './stores/todoStore';

const stores = {// 导入store
  counter,
  todo
}
ReactDOM.render(
  <Provider {...stores}><App /></Provider>,
  document.getElementById('root'))