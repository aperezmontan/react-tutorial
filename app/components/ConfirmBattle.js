var React = require('react');
var MainContainer = require('../containers/MainContainer');
var styles = require('../styles');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;
var RestaurantDetails = require('./RestaurantDetails');
var RestaurantDetailsWrapper = require('./RestaurantDetailsWrapper');
var Loading = require('./Loading');

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <Loading speed={1000} text="Please Wait"/>
    : <MainContainer>
        <h1> Confirm Restaurants </h1>
        <div className="col-sm-8 col-sm-offset-2">
          <RestaurantDetailsWrapper header="Restaurant One">
            <RestaurantDetails info={props.restaurantInfo[0]} />
          </RestaurantDetailsWrapper>
          <RestaurantDetailsWrapper header="Restaurant Two">
            <RestaurantDetails info={props.restaurantInfo[1]} />
          </RestaurantDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}> INITIATE BATTLE </button>
          </div>
          <div className="col-sm-12" style={styles.space}>
            <Link to="/restaurantOne">
              <button type="button" className="btn btn-lg btn-danger"> Reselect Restaurants </button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  restaurantInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;