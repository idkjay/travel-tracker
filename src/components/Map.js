import React, { useState } from 'react';
import Place from './Place'

const Map = props => {
  const [selectedId,setSelectedId] = useState(null)
  let beautyMsg;
  const destinations = props.mapArray.map((placeObj) => {

    let selectedStatus = false

    if (selectedId === placeObj.id) {
      selectedStatus = true
    }

    if (selectedId === props.favorite) {
      beautyMsg =
      <div className="beaut">What a beauty!</div>
    }

    let handleClickFunc = () => {
      event.preventDefault()
      if(placeObj.id === selectedId) {
        setSelectedId(null)
      } else {
        setSelectedId(placeObj.id)
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
