import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import MainContainer from '../containers/MainContainer';
import { space } from '../styles';
import RestaurantDetails from './RestaurantDetails';
import RestaurantDetailsWrapper from './RestaurantDetailsWrapper';
import Loading from './Loading';

function ConfirmBattle ({ isLoading, restaurantInfo, onInitiateBattle }) {
  return isLoading === true
    ? <Loading speed={1000} text="Please Wait"/>
    : <MainContainer>
        <h1> Confirm Restaurants </h1>
        <div className="col-sm-8 col-sm-offset-2">
          <RestaurantDetailsWrapper header="Restaurant One">
            <RestaurantDetails info={restaurantInfo[0]} />
          </RestaurantDetailsWrapper>
          <RestaurantDetailsWrapper header="Restaurant Two">
            <RestaurantDetails info={restaurantInfo[1]} />
          </RestaurantDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={space}>
            <button type="button" className="btn btn-lg btn-success" onClick={onInitiateBattle}> INITIATE BATTLE </button>
          </div>
          <div className="col-sm-12" style={space}>
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

export default ConfirmBattle;