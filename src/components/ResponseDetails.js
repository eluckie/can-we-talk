import React from "react";

function ResponseDetails(props) {

  return (
    <React.Fragment>
      <h1>prompt: {props.prompt.text}</h1>
      <p>
        <span id="green">{props.response.upvoteCount}</span> <button id="green-btn" onClick={() => props.handleUpvoteClick(props.response.id)}></button>
        <button id="pink-btn" onClick={() => props.handleDownvoteClick(props.response.id)}></button> <span id="pink">{props.response.downvoteCount}</span>
      </p>
    </React.Fragment>
  );
}

export default ResponseDetails;