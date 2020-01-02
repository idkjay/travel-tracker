import React, { useState } from 'react';
import Place from './Place'

const Map = props => {
  const [selectedId,setSelectedId] = useState([])
  let beautyMsg;
  const destinations = props.mapArray.map((placeObj) => {

    let selectedStatus = false

    if (selectedId.includes(placeObj.id)) {
      selectedStatus = true
    }

    if (selectedId.includes(props.favorite)) {
      beautyMsg =
      <div className="beaut">What a beauty!</div>
    }

    let handleClickFunc = () => {
      let updatedArray = selectedId.concat([placeObj.id])
      event.preventDefault();
      if(selectedId.includes(placeObj.id)) {
        let mapOfPlaces = selectedId.map(placeOfPlaces => {
          return placeOfPlaces
        })
        let itemToBeRemoved = mapOfPlaces.indexOf(placeObj.id);
        mapOfPlaces.splice(itemToBeRemoved,1)
        setSelectedId(mapOfPlaces)
      } else {
        setSelectedId(updatedArray)
      }
    }

    return(
      <Place
        key={placeObj.id}
        name={placeObj.name}
        selectedStatus={selectedStatus}
        onClickFunc={handleClickFunc}
      />
    )
  })

  return (
    <div className="box-div">
      {destinations}
      {beautyMsg}
    </div>
  )
}

export default Map;
