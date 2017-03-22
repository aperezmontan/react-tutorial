import React from 'react';
import { Link } from 'react-router';
import MainContainer from '../containers/MainContainer';

function Home () {
  return (
    <MainContainer>
      <h1>SALIDO Restaurant Battle</h1>
      <p> Who's nasty? </p>
      <Link to='/restaurantOne'>
        <button type="button" className="btn btn-lg btn-success">Let's go !!</button>
      </Link>
    </MainContainer>
  )
}

export default Home;