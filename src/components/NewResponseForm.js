import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
// import Prompts from "./Prompts"

function NewResponseForm(props) {

  function handleNewResponseFormSubmission(event) {
    event.preventDefault();
    props.onNewResponseCreation({
      prompt: this.state.selectedPrompt,
      response: event.target.response.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <div id="prompt-card">
        {/* insert prompt here */}
      </div>
      <br/>
      <form onSubmit={handleNewResponseFormSubmission}>
        <textarea
          type="text"
          name="response"
          placeholder="Now what do you have to say for yourself?"
          rows={10}
          cols={40}/>
        <br/>
        <button type="submit">speak my truth</button>
      </form>
    </React.Fragment>
  );
}

NewResponseForm.propTypes = {
  onNewResponseCreation: PropTypes.func,
  prompt: PropTypes.object
};

export default NewResponseForm;