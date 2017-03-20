var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle.js');
var salidoHelpers = require('../utils/salidoHelpers.js');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return{
      isLoading: true,
      restaurantInfo: []
    }
  },
  componentDidMount: function () {
    query = this.props.location.query;
    salidoHelpers.getRestaurantInfo([query.restaurantOne, query.restaurantTwo])
      .then(function(restaurants) {
        this.setState({
          isLoading: false,
          restaurantInfo: [restaurants[0], restaurants[1]]
        })
      }.bind(this));
  },
  render: function() {
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        restaurantInfo={this.state.restaurantInfo}
      />
    )
  }
});

module.exports = ConfirmBattleContainer;