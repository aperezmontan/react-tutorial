var React = require('react');
var PropTypes = React.PropTypes;

function RestaurantInfoWrapper (restaurant) {
  return (
    <div className="col-sm-6">
      <p className="lead"> {restaurant.header} </p>
      {restaurant.children}
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

module.exports = RestaurantInfoWrapper;