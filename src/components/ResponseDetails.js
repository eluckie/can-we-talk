import React from "react";
import PropTypes from "prop-types";

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
        <p id="tiny-font">{props.response.date}</p>
        <br/>
      </div>
      <p id="tiny-font" onClick={() => props.onClickingDelete(props.response.id)}>delete reponse</p>
    </React.Fragment>
  );
}

ResponseDetails.propTypes = {
  onClickingDelete: PropTypes.func
};

export default ResponseDetails;
