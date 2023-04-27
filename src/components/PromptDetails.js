import React from "react";
import PropTypes from "prop-types";
import Response from "./Response";

function PromptDetails(props) {
  const { prompt } = props;

  return (
    <React.Fragment>
      <h1>{prompt.text}</h1>
      <button onClick={props.handleAddNewResponseClick}>i've got something to say</button>
      <br/><br/><br/>
        {props.promptResponses.map((response) =>
          <div id="response-div" key={response.id}>
            <Response
              whenResponseClicked={props.onResponseSelection}
              whenDownvoteClicked={props.onDownvoting}
              whenUpvoteClicked={props.onUpvoting}
              prompt={prompt}
              body={response.body}
              upvoteCount={response.upvoteCount}
              downvoteCount={response.downvoteCount}
              id={response.id}
            />
          </div>
        )}
    </React.Fragment>
  );
}

PromptDetails.propTypes = {
  prompt: PropTypes.object,
  handleAddNewResponseClick: PropTypes.func,
  promptResponses: PropTypes.array,
  whenUpvoteClicked: PropTypes.func,
  whenDownvoteClicked: PropTypes.func
};

export default PromptDetails;