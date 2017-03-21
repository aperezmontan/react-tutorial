var React = require('react');
var Results = require('../components/Results');
var salidoHelpers = require('../utils/salidoHelpers');

var ResultsContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function () {
    salidoHelpers.battle(this.props.location.state.restaurantInfo)
      .then(function (scores) {
        this.setState({
          isLoading: false,
          scores: scores
        })
      }.bind(this))
  },
  render: function () {
    return(
      <Results 
        info={this.props.location.state.restaurantInfo} 
        isLoading={this.state.isLoading}
        scores={this.state.scores} 
      />
    )
  }
})

module.exports = ResultsContainer;