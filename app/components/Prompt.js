import React, { PropTypes } from 'react';
import Select from 'react-select'

import { transparentBg } from '../styles';

function Prompt({ header, onSubmitUser, updateUserInput, restaurant }) {
  return(
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1> {header} </h1>
      <div className="col-sm-12">
        <form onSubmit={onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="restaurant"
              onChange={updateUserInput}
              value={restaurant}
              type="text"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-lg btn-success" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  updateUserInput: PropTypes.func.isRequired,
  restaurant: PropTypes.string.isRequired,
}

export default Prompt;