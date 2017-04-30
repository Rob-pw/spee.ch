import { app } from 'hyperapp';
import * as main from './app';

function render() {
  const root = document.getElementById('app');

  if (root) {
    root.innerHTML = '';
    app({ ...main, root });
  }
}

if (module.hot) {
  module.hot.accept(render);
}

render();
