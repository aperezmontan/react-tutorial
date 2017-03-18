var axios = require('axios');

function restaurantSearch (searchTerm) {
  return axios.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$where=dba%20like%20%27%25' + searchTerm + '%25%27&$select=dba&$limit=5')
};

function getRestaurant (restaurant) {
  return axios.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=' + restaurant + '&$select=dba&$limit=2')
};

var helpers = {
  getRestaurantInfo: function (restaurants) {
    return axios.all(restaurants.map(function (restaurantInfo) {
      return getRestaurant(restaurantInfo)
    })).then(function (info) {
      console.log(info);
    }).catch(function (err) {
      console.warn('Error in restaurantInfo', err);
    })
  },
  getRestaurantSearch: function (searchTerm) {
    return axios.all(searchTerm.map(function (searchTerm) {
      return restaurantSearch(searchTerm)
    })).then(function (info) {
      return info[0].data.map(function (restaurant) {
        return restaurant.dba;
      })
    }).catch(function (err) {
      console.warn('Error in restaurantSearch', err);
    })
  }
};

module.exports = helpers;