import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelpers'
import Header from 'components/Header/Header'
import styles from './styles.module.css'
import Sidebar from 'components/Sidebar/Sidebar'


export class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }

  onReady(mapProps, map) {
    const {google} = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination
        })
      }).catch((status, result) => {
        //there was an error
      })
  }
  render() {
    return (
      <div>
        <Map
          visible={false}
          className={styles.wrapper}
          onReady={this.onReady.bind(this)}
          google={this.props.google}>
          <Header />
          <Sidebar
            title={'Restaurants'}
            places={this.state.places}/>
            {/*contents*/}
          </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GAPI_KEY
})(Container)
