import React from "react";
import Icon from "./../img/icon.png";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <React.Fragment>
      <h1>can we talk</h1>
      <img src={Icon} alt="icon of three chat bubbles" />
      <button onClick={props.handlePrompt1Click}>prompt 1</button>
      <button onClick={props.handlePrompt2Click}>prompt 2</button>
      <button onClick={props.handlePrompt3Click}>prompt 3</button>
      <button onClick={props.handlePrompt4Click}>prompt 4</button>
    </React.Fragment>
  );
}

Header.propTypes = {
  handlePrompt1Click: PropTypes.func,
  handlePrompt2Click: PropTypes.func,
  handlePrompt3Click: PropTypes.func,
  handlePrompt4Click: PropTypes.func
};

export default Header;