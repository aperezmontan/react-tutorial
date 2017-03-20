var React = require('react');
var PropTypes = React.PropTypes;

function puke (obj) {
  return <pre> {JSON.stringify(obj, 2, '')} </pre>
}

function Results (props) {
	return(
    <div> Results: {puke(props)}</div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  info: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string
  })
}

module.exports = Results;