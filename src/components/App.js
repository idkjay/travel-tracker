import React from 'react';
import Map from './Map'

const App = (props) => {

  return (
    <div id="wishlist-div">
      <div className="row">
        <div className="small-12 small-centered columns text-center">
          <h3>Wanderlust Wishlist</h3>
          <Map
            data={props.data}
            favorite={props.data.favoritePlaceId}
            mapArray={props.data.places}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
