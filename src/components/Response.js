import React from "react";
import PropTypes from "prop-types";

function Response(props) {
  return (
    <React.Fragment>
      <div>
        <p onClick={() => props.whenResponseClicked(props.id)}>{props.body}</p>
        <div id="reaction-btns" onClick={() => props.whenUpvoteClicked(props.id)}>👌🏾<span id="green">{props.upvoteCount}</span></div>
        <div id="reaction-btns" onClick={() => props.whenDownvoteClicked(props.id)}>🖕🏾<span id="pink">{props.downvoteCount}</span></div>
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
  whenResponseClicked: PropTypes.func,
  handleDownvoteClick: PropTypes.func,
  handleUpvoteClick: PropTypes.func
};

export default Response;