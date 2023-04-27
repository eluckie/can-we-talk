import React from "react";

function ResponseDetails(props) {

  return (
    <React.Fragment>
      <h1>prompt: {props.prompt.text}</h1>
      <hr/>
      <div id="response-div">
        <h3>response: {props.response.body}</h3>
        <div id="reaction-btns">👌🏾<span id="green">{props.response.upvoteCount}</span></div>
        <div id="reaction-btns">🖕🏾<span id="pink">{props.response.downvoteCount}</span></div>
        <br/><br/>
        <p id="timestamp">*add date & timestamp*</p>
      </div>
    </React.Fragment>
  );
}

export default ResponseDetails;

// onClick={() => props.handleDownvoteClick(props.response.id)}
// onClick={() => props.handleUpvoteClick(props.response.id)}