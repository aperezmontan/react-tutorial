import React, { Component } from 'react';

import Prompt from '../components/Prompt.js';

class PromptContainer extends Component {
  constructor () {
    super ()
    this.state = {
      restaurant: ''
    }
  }
  handleUserInput (e) {
    this.setState({
      'restaurant': e.target.value,
    })
  }
  handleSubmitUser (e) {
    e.preventDefault();
    const restaurant = this.state.restaurant;
    this.setState({
      restaurant: ''
    })

    const { restaurantOne } = this.props.routeParams;
    if (restaurantOne) {
      this.context.router.push({
        pathname: 'battle',
        query: {
          restaurantOne,
          restaurantTwo: this.state.restaurant
        }
      })
    } else {
      this.context.router.push(`/restaurantTwo/${this.state.restaurant}`)
    }
  }
  render () {
    return(
      <Prompt
        header={this.props.route.header}
        onSubmitUser={ (event) => this.handleSubmitUser(event) }
        updateUserInput={ (event) => this.handleUserInput(event) }
        restaurant={this.state.restaurant}
        restaurantSearch={this.state.restaurantSearch}
      />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer;