import React from "react";
import PropTypes from "prop-types";

function Prompts(props) {
  return (
    <React.Fragment>
      <h1>{props.text}</h1>
    </React.Fragment>
  );
}

Prompts.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string
};

export default Prompts;