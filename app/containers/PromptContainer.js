var React = require('react');
var Prompt = require('../components/Prompt.js')
var salidoHelpers = require('../utils/salidoHelpers.js');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return{
      'restaurant': ''
    }
  },
  handleUserInput: function (e) {
    this.setState({
      'restaurant': e.target.value,
    })
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    var restaurant = this.state.restaurant;
    this.setState({
      restaurant: ''
    })

    if (this.props.routeParams.restaurantOne) {
      this.context.router.push({
        pathname: 'battle',
        query: {
          restaurantOne: this.props.routeParams.restaurantOne,
          restaurantTwo: this.state.restaurant
        }
      })
    } else {
      this.context.router.push('/restaurantTwo/' + this.state.restaurant)
    }
  },
  render: function() {
    return(
      <Prompt
        header={this.props.route.header}
        onSubmitUser={this.handleSubmitUser}
        updateUserInput={this.handleUserInput}
        restaurant={this.state.restaurant}
        restaurantSearch={this.state.restaurantSearch}
      />
    )
  }
});

module.exports = PromptContainer;