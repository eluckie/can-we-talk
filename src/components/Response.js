import React from "react";
import PropTypes from "prop-types";

function Response(props) {
  return (
    <React.Fragment>
      <div>
        <h3>{props.body}</h3>
        <p>
          <span id="green">{props.upvotes}</span> <button id="green-btn"></button>
          <button id="red-btn"></button> <span id="red">{props.downvotes}</span>
        </p>
      </div>
    </React.Fragment>
  );
}

Response.propTypes = {
  body: PropTypes.string,
  upvotes: PropTypes.number,
  downvotes: PropTypes.number,
  prompt: PropTypes.object.isRequired,
  id: PropTypes.string
};

export default Response;