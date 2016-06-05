import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import styles from './styles.module.css'
import routes from '../../app.js'

class App extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
    history: PropTypes.object.isRequired
  }

  // class getter
  get content() {
    return (<Router
        routes={this.props.routes}
        history={this.props.history} />)
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        {this.content}
      </div>
    )
  }
}

module.exports = App;
