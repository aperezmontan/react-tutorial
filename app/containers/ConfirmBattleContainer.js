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
    salidoHelpers.getRestaurantInfo([query.restaurantOne, query.restaurantTwo]);
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