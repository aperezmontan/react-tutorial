var axios = require('axios');

function getRestaurant (restaurant) {
  return axios.get('https://api.github.com/users/' + restaurant)
};

var helpers = {
  getRestaurantInfo: function (restaurants) {
    return axios.all(restaurants.map(function (restaurantInfo) {
      return getRestaurant(restaurantInfo)
    })).then(function (info) {
      return info.map(function (restaurant) {
        return restaurant.data;
      })
    }).catch(function (err) {
      console.warn('Error in restaurantInfo', err);
    })
  }
};

module.exports = helpers;