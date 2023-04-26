import React from "react";
import PropTypes from "prop-types";

function Response(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenResponseClicked(props.id)}>
        <h3>{props.body}</h3>
        <h4>
          <span id="green">{props.upvoteCount} upvotes</span>
          <span id="pink">{props.downvoteCount} downvotes</span>
        </h4>
      </div>
    </React.Fragment>
  );
}

Response.propTypes = {
  body: PropTypes.string,
  upvoteCount: PropTypes.number,
  downvoteCount: PropTypes.number,
  prompt: PropTypes.object.isRequired,
  id: PropTypes.string,
  whenResponseClicked: PropTypes.func
};

export default Response;