
import React from 'react';
import ReactDOM from 'react-dom';


//
// Replace static AppRouter with router
// i.e.
// import AppRouter from './containers/AppRouter.jsx';
//

const worker = new SharedWorker('worker.js');
worker.port.addEventListener('message', (e) => alert(e.data), false);

worker.port.start();

// post a message to the shared web worker
worker.port.postMessage('Alyssa');

const AppRouter = () => (
  <div>App Starts Here</div>
);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
