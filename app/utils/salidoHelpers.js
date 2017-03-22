import axios from 'axios';

function getRestaurant (restaurant) {
  return axios.get(`https://api.github.com/users/${restaurant}`);
};

function calculateScores (restaurants) {
  return [restaurants[0].followers * 3 + restaurants[0].totalStars, restaurants[1].followers * 3 + restaurants[1].totalStars]
};

function getRepos (username) {
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
};

async function getRestaurantData ({ login, followers }) {
  try {
    const repos = await getRepos(login);
    const totalStars = await getTotalStars(repos);
    return {
      followers,
      totalStars
    }
  } catch (error) {
    console.warn("Something went wrong with getRestaurantData", error);
  }
};

function getTotalStars (repos) {  
  return repos.data.reduce((prevVal, currVal) => prevVal + currVal.stargazers_count, 0)
};

export async function battle (restaurants) {
  const restaurantOneData = getRestaurantData(restaurants[0]);
  const restaurantTwoData = getRestaurantData(restaurants[1]);

  try {
    const restaurantData = await Promise.all([restaurantOneData, restaurantTwoData]);
    return await calculateScores(restaurantData);
  } catch (error) {
    console.warn("Issue with battle", error);
  }
};

export async function getRestaurantInfo (restaurants) {
  try {
    const info = await Promise.all(restaurants.map((restaurantInfo) => getRestaurant(restaurantInfo)));
    return info.map(({ data }) => data)
  } catch (error) {
    console.warn("Issue with getting info", error)
  }
};
