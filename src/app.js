import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'

const App = React.createClass({
  render: function() {
    return(<div>hello, world</div>)
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
