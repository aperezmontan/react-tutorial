import React, { PropTypes } from 'react';

function RestaurantInfo ({ score, info }) {
  return (
    <div>
      {!!score && <li className="list-group-item"><h3> Score: {score} </h3></li>}
      <li className="list-group-item"><h3> Login: {info.login} </h3></li>
      {!!info.name && <li className="list-group-item"><h3> Name: {info.name} </h3></li>}
      <li className="list-group-item"><h3> Followers: {info.followers} </h3></li>
    </div>
  )
}

RestaurantInfo.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string
  })
}

export default RestaurantInfo;