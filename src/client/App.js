import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './app.scss';
class App extends React.Component {
 
  render() {
      return (
        <div className="main">
         <h1>Hello MERN Boilerplate!</h1>
         <p>This is a MERN template app with:</p>
         <ul>
           <li>MongoDB</li>
           <li>Express</li>
           <li>React</li>
           <li>ES6-ES8 Transpiling</li>
           <li>Webpack</li>
           <li>Sass</li>
           <li>Linting</li>
           <li>ENV Files</li>
           <li>Dockerization</li>
           <li>Server-side Rendering/Isomophic JS</li>
         </ul>
         </div>
      );
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);