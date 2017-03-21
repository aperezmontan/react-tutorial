var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../containers/MainContainer');

var Home = React.createClass({
  render: function() {
    return(
      <MainContainer>
        <h1>SALIDO Restaurant Battle</h1>
        <p> Who's nasty? </p>
        <Link to='/restaurantOne'>
        	<button type="button" className="btn btn-lg btn-success">Let's go !!</button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;