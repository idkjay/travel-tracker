import React from 'react';

const Place = props => {
  let destination = props.name
  let classes = "travel"

  if (props.selectedStatus) {
    classes += " done"
  }

  return (
    <div className={classes} onClick={props.onClickFunc}>
      {destination}
    </div>
  )
}

export default Place;
