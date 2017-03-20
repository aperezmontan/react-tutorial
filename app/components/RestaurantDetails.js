var React = require('react');
var PropTypes = React.PropTypes;

function RestaurantInfo (restaurant) {
  return (
    <div>
      {!!restaurant.score && <li className="list-group-item"><h3> Score: {restaurant.score} </h3></li>}
      <li className="list-group-item"><h3> Login: {restaurant.info.login} </h3></li>
      {!!restaurant.info.name && <li className="list-group-item"><h3> Name: {restaurant.info.name} </h3></li>}
      <li className="list-group-item"><h3> Followers: {restaurant.info.followers} </h3></li>
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

module.exports = RestaurantInfo;