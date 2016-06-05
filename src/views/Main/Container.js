import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelpers'

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
        //we get some results from a pagination obj
      }).catch((status, result) => {
      //there was an error
      })
  }
  render() {
    return (
      <div>
        <Map
        onReady={this.onReady.bind(this)}
        google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GAPI_KEY
})(Container)
