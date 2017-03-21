var React = require('react');
var PropTypes = React.PropTypes;
var MainContainer = require('../containers/MainContainer');
var styles = require('../styles');
var RestaurantDetails = require('./RestaurantDetails');
var RestaurantDetailsWrapper = require('./RestaurantDetailsWrapper');
var Link = require('react-router').Link;
var Loading = require('./Loading');

function StartOver () {
  return (
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-12" style={styles.space}>
        <Link to="/restaurantOne">
          <button type="button" className="btn btn-lg btn-danger"> Play Again </button>
        </Link>
      </div>
    </div>
  )
}

function Results (props) {
  if (props.isLoading === true) {
    return (
      <Loading />
    )
  }
  
  if (props.scores[0] === props.scores[1]){
    return (
      <MainContainer>
        <h1> It's a tie !! </h1>
        <StartOver />
      </MainContainer>
    )
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;

  return (
      <MainContainer>
        <h1> Results </h1>
        <div className="col-sm-8 col-sm-offset-2">
          <RestaurantDetailsWrapper header="Winner!">
            <RestaurantDetails info={props.info[winningIndex]} score={props.scores[winningIndex]}/>
          </RestaurantDetailsWrapper>
          <RestaurantDetailsWrapper header="Loser!">
            <RestaurantDetails info={props.info[losingIndex]} score={props.scores[losingIndex]}/>
          </RestaurantDetailsWrapper>
        </div>
        <StartOver />
      </MainContainer>
    ) 
}

Results.propTypes = {
  info: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;