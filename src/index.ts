import { makeComponent } from './makeComponent';

function component() {
  const element = makeComponent();

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = ['Hello', 'webpack'].join(', ');

  return element;
}

document.body.appendChild(component());
