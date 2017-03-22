import React, { Component } from 'react';

import Results from '../components/Results';
import { battle } from '../utils/salidoHelpers';

class ResultsContainer extends Component {
  constructor () {
    super ()
    this.state = {
      isLoading: true,
      scores: []
    }
  }
  async componentDidMount () {
    try {
      const scores = await battle(this.props.location.state.restaurantInfo);
      this.setState({
        isLoading: false,
        scores
      })
    } catch (error) {
      console.warn("Problem with battle", error);
    }
  }
  render () {
    return(
      <Results 
        info={this.props.location.state.restaurantInfo} 
        isLoading={this.state.isLoading}
        scores={this.state.scores} 
      />
    )
  }
}

export default ResultsContainer;