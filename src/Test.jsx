// For stateless components, use a functional component
// For stateful components, use a class

// https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/test.scss';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    const classes = classNames(['terra-Test',
      this.props.variant,
      this.state.isSelected && 'u-selected',
    ]);


    if (!this.props.name) {
      return null;
    }
    if (!this.props.variant) {
      return null;
    }
    return (<button
      className={classes}
      onClick={this.handleClick}
    >Terra, {this.props.name}</button>);
  }
}

Test.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

Test.defaultProps = {
  name: 'default',
  variant: 'terra-Test--default',
};

export default Test;
