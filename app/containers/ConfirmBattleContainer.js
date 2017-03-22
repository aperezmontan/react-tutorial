import React, { Component } from 'react';

import ConfirmBattle from '../components/ConfirmBattle.js';
import { getRestaurantInfo } from '../utils/salidoHelpers.js';

class ConfirmBattleContainer extends Component {
  constructor () {
    super ()
    this.state = {
      isLoading: true,
      restaurantInfo: []
    }
  }
  async componentDidMount () {
    const query = this.props.location.query;

    try {
      const restaurants = await getRestaurantInfo([query.restaurantOne, query.restaurantTwo]);
      this.setState({
        isLoading: false,
        restaurantInfo: [restaurants[0], restaurants[1]]
      })
    } catch (error) {
      console.warn("Problem with getRestaurantInfo", error);
    }
  }
  handleInitiateBattle () {
    this.context.router.push({
      pathname: '/results',
      state: {
        restaurantInfo: this.state.restaurantInfo
      }
    })
  }
  render () {
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={ () => this.handleInitiateBattle() }
        restaurantInfo={this.state.restaurantInfo}
      />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;