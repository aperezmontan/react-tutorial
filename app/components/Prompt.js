var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var Select = require('react-select')

function Prompt(props) {
  return(
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1> {props.header} </h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="restaurant"
              onChange={props.updateUserInput}
              // options={props.restaurantSearch}
              value={props.restaurant}
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

module.exports = Prompt;