import React from "react";
import PropTypes from "prop-types";

function PromptDetails(props) {
  const { prompt } = props;

  return (
    <React.Fragment>
      <h1>{prompt.text}</h1>
      <button onClick={props.handleAddNewResponseClick}>i've got something to say</button>
    </React.Fragment>
  );
}

PromptDetails.propTypes = {
  prompt: PropTypes.object,
  handleAddNewResponseClick: PropTypes.func
};

export default PromptDetails;