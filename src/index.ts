import { makeComponent } from './makeComponent';
import Logo from './webpack.png';
import './style.css';

function test() {
  const element = makeComponent();

  element.innerHTML = ['Hello', 'webpack'].join(', ');

  return element;
}

const LogoElement = new Image();
LogoElement.src = Logo;

document.body.appendChild(test());
document.body.appendChild(LogoElement);
