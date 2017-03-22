import React, { PropTypes } from 'react';
import { container, content } from '../styles';

const Loading = React.createClass({
  propTypes: {
    speed: PropTypes.number,
    text: PropTypes.string
  },
  getDefaultProps () {
    return{
      speed: 300,
      text: 'Loading'
    }
  },
  getInitialState () {
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },
  componentDidMount () {
    const stopper = this.originalText + '...';

    this.interval = setInterval(() => {
      if (this.state.text === stopper){
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed)
  },
  componentWillUnmount () {
    clearInterval(this.interval);
  },
  render () {
    return (
      <div style={container}>
        <p style={content}> {this.state.text} </p>
      </div>
    )
  }
});

export default Loading;