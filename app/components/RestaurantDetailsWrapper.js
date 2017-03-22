import React, { PropTypes } from 'react';

function RestaurantInfoWrapper ({ header, children }) {
  return (
    <div className="col-sm-6">
      <p className="lead"> {header} </p>
      {children}
    </div>
  )
}

RestaurantInfoWrapper.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string
  })
}

export default RestaurantInfoWrapper;