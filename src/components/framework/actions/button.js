//import { Link } from "gatsby"//this relies on Gatsby. Not a great idea for the framework?
import "./button.scss";
import PropTypes from "prop-types";
import React from "react";

export default class Button extends React.Component {

  render() {
    const { className, ...otherProps } = this.props;
    return (
      <button
        {...otherProps}
        type="button"
        className={`button ${className}`}
      />
    );
  }

}

Button.propTypes = {
  className: PropTypes.string,
  isLink: PropTypes.bool
};

Button.defaultProps = {
  className: "",
  isLink: false
};
