import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { format } from "date-fns";

function NewResponseForm(props) {
  const { prompt } = props;

  function handleNewResponseFormSubmission(event) {
    event.preventDefault();
    props.onNewResponseCreation({
      prompt: prompt,
      body: event.target.body.value,
      upvoteCount: 0,
      downvoteCount: 0,
      date: format(new Date(), 'Pp'),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <div id="prompt-card">
        <h3>{prompt.text}</h3>
      </div>
      <br/>
      <form onSubmit={handleNewResponseFormSubmission}>
        <textarea
          type="text"
          name="body"
          placeholder="Now what do you have to say for yourself?"
          rows={10}
          cols={40}/>
        <br/>
        <button type="submit">speak my truth</button>
      </form>
      <br/>
      <button onClick={props.hideResponseForm}>nevermind</button>
    </React.Fragment>
  );
}

NewResponseForm.propTypes = {
  onNewResponseCreation: PropTypes.func,
  prompt: PropTypes.object,
  hideResponseForm: PropTypes.func
};

export default NewResponseForm;