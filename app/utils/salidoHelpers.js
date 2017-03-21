var axios = require('axios');

function getRestaurant (restaurant) {
  return axios.get('https://api.github.com/users/' + restaurant);
};

function calculateScores (restaurants) {
  return [restaurants[0].followers * 3 + restaurants[0].totalStars, restaurants[1].followers * 3 + restaurants[1].totalStars]
};

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos?per_page=100');
};

function getRestaurantData (restaurant) {
  return getRepos(restaurant.login)
    .then(getTotalStars)
    .then(function (totalStars) {      
      return {
        followers: restaurant.followers,
        totalStars: totalStars
      }
    })
};

function getTotalStars (repos) {  
  return repos.data.reduce(function (prevVal, currVal) {
    return prevVal + currVal.stargazers_count;
  }, 0)
};

var helpers = {
  battle: function (restaurants) {
    var restaurantOneData = getRestaurantData(restaurants[0]);
    var restaurantTwoData = getRestaurantData(restaurants[1]);

    return axios.all([restaurantOneData, restaurantTwoData])
      .then(calculateScores)
      .catch(function (err) {        
      })
  },
  getRestaurantInfo: function (restaurants) {
    return axios.all(restaurants.map(function (restaurantInfo) {      
      return getRestaurant(restaurantInfo)
    })).then(function (info) {
      return info.map(function (restaurant) {
        return restaurant.data;
      })
    }).catch(function (err) {      
    })
  }
};

module.exports = helpers;