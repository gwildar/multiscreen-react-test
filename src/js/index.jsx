
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'none' };
    // This binding is necessary to make `this` work in the callback
    this.handleMessage = this.handleMessage.bind(this);
    const worker = new SharedWorker('worker.js');
    worker.port.start();
    worker.port.onmessage = this.handleMessage;

    // post a message to the shared web worker
    worker.port.postMessage('test');
  }

  handleMessage(e) {
    this.setState({ message: e.data });
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
