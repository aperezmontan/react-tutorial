import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Loading from './Loading';
import MainContainer from '../containers/MainContainer';
import RestaurantDetails from './RestaurantDetails';
import RestaurantDetailsWrapper from './RestaurantDetailsWrapper';
import { space } from '../styles';

function StartOver () {
  return (
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-12" style={space}>
        <Link to="/restaurantOne">
          <button type="button" className="btn btn-lg btn-danger"> Play Again </button>
        </Link>
      </div>
    </div>
  )
}

function Results ({ isLoading, scores, info }) {
  if (isLoading === true) {
    return (
      <Loading />
    )
  }
  
  if (scores[0] === scores[1]){
    return (
      <MainContainer>
        <h1> It's a tie !! </h1>
        <StartOver />
      </MainContainer>
    )
  }

  let winningIndex = scores[0] > scores[1] ? 0 : 1;
  let losingIndex = winningIndex === 0 ? 1 : 0;

  return (
      <MainContainer>
        <h1> Results </h1>
        <div className="col-sm-8 col-sm-offset-2">
          <RestaurantDetailsWrapper header="Winner!">
            <RestaurantDetails info={info[winningIndex]} score={scores[winningIndex]}/>
          </RestaurantDetailsWrapper>
          <RestaurantDetailsWrapper header="Loser!">
            <RestaurantDetails info={info[losingIndex]} score={scores[losingIndex]}/>
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

export default Results;