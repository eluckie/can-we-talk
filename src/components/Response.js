import React from "react";
import PropTypes from "prop-types";

function Response(props) {
  return (
    <React.Fragment>
      <div>
        <p id="tiny-font">{props.date}</p>
        <br/><br/>
        <p onClick={() => props.whenResponseClicked(props.id)}>{props.body}</p>
        <br/>
        <button id="green-btn" onClick={() => props.whenUpvoteClicked(props.id)}><span id="green">{props.upvoteCount}</span></button>
        <button id="pink-btn" onClick={() => props.whenDownvoteClicked(props.id)}><span id="pink">{props.downvoteCount}</span></button>
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
  handleUpvoteClick: PropTypes.func,
  date: PropTypes.string
};

export default Response;