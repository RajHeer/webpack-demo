import _ from 'lodash';
import printMe from './print.js';
import myName from  './myName.js'

function component() {
    const element = document.createElement('div');
    const element2 = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element2.innerHTML = myName('John Doe');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(element2);
    element.appendChild(btn);
    
    return element;
  }
  
  document.body.appendChild(component());