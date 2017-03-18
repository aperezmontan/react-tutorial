var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg

var Home = React.createClass({
  render: function() {
    return(
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>SALIDO Restaurant Battle</h1>
        <p> Who's nasty? </p>
        <Link to='/restaurantOne'>
        	<button type="button" className="btn btn-lg btn-success">Let's go !!</button>
        </Link>

      </div>
    )
  }
});

module.exports = Home;