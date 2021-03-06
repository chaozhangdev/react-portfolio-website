import React from 'react';
import Typed from 'typed.js';
import './Typing.css';

class Typing extends React.Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      typeSpeed: 40,
      backDelay: 1400, 
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {

    const textStyle = {
      fontSize: '24px',
      color: '#fff',
      padding: 20
    }

    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={textStyle}
            // className='myTextShadow'
            ref={(el) => { this.el = el; }}
          />
        </div>
      </div>
    );
  }
}

export default Typing;