import React from "react";
import Prompts from "./Prompts";
import NewResponseForm from "./NewResponseForm";
import PromptDetails from "./PromptDetails";
import Header from "./Header";
import ResponseDetails from "./ResponseDetails";

class ResponseControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      selectedPrompt: null,
      selectedResponse: null,
      responseList: [],
      selectedPromptsResponses: []
    };
  }

  promptList = [
    {
      text: "this is the first prompt",
      id: 1
    },
    {
      text: "and this is the second",
      id: 2
    },
    {
      text: "here goes the third one",
      id: 3
    },
    {
      text: "and the fourth and final prompt",
      id: 4
    }
  ];

  showPrompt1 = () => {
    this.setState({selectedPromptsResponses: null});
    const filteredList = this.filterResponseList();
    this.setState({
      selectedPrompt: this.promptList[0],
      selectedResponse: null,
      selectedPromptsResponses: filteredList
    });
  }

  showPrompt2 = () => {
    this.setState({selectedPromptsResponses: null});
    const filteredList = this.filterResponseList();
    this.setState({
      selectedPrompt: this.promptList[1],
      selectedResponse: null,
      selectedPromptsResponses: filteredList
    });
  }

  showPrompt3 = () => {
    this.setState({selectedPromptsResponses: null});
    const filteredList = this.filterResponseList();
    this.setState({
      selectedPrompt: this.promptList[2],
      selectedResponse: null,
      selectedPromptsResponses: filteredList
    });
  }

  showPrompt4 = () => {
    this.setState({selectedPromptsResponses: null});
    const filteredList = this.filterResponseList();
    this.setState({
      selectedPrompt: this.promptList[3],
      selectedResponse: null,
      selectedPromptsResponses: filteredList
    });
  }

  showForm = () => {
    this.setState({formVisible: true});
  }

  hideForm = () => {
    this.setState({formVisible: false});
  }

  handleAddingResponseToPrompt = (newResponse) => {
    const newResponseList = this.state.responseList.concat(newResponse);
    this.setState({
      responseList: newResponseList,
      formVisible: false
    });
    const filteredList = this.filterResponseList();
    this.setState({selectedPromptsResponses: filteredList});
  }

  filterResponseList = () => {
    const filteredResponses = this.state.responseList
      .filter(resp => resp.prompt.id === this.state.selectedPrompt.id)
      .sort(resp => resp.upvoteCount)
    return filteredResponses;
  }

  handleChangingSelectedResponse = (id) => {
    const selectedResponse = this.state.responseList.filter(resp => resp.id === id)[0];
    this.setState({selectedResponse: selectedResponse});
  }

  handleUpvoting = (id) => {
    const currentPrompt = this.state.selectedPrompt;
    const responseToUpvote = this.state.responseList.filter(resp => resp.id === id)[0];
    const newUpvoteCount = responseToUpvote.upvoteCount + 1;
    const upvotedResponse = {
      body: responseToUpvote.body,
      upvoteCount: newUpvoteCount,
      downvoteCount: responseToUpvote.downvoteCount,
      prompt: responseToUpvote.prompt,
      date: responseToUpvote.date,
      id: responseToUpvote.id
    }

    const updatedResponseList = this.state.responseList
      .filter(resp => resp.id !== id)
      .concat(upvotedResponse);
    this.setState({
      responseList: updatedResponseList,
      selectedPrompt: currentPrompt
    });
  }

  handleDownvoting = (id) => {
    const currentPrompt = this.state.selectedPrompt;
    const responseToDownvote = this.state.responseList.filter(resp => resp.id === id)[0];
    const newDownvoteCount = responseToDownvote.downvoteCount - 1;
    const downvotedResponse = {
      body: responseToDownvote.body,
      upvoteCount: responseToDownvote.upvoteCount,
      downvoteCount: newDownvoteCount,
      prompt: responseToDownvote.prompt,
      date: responseToDownvote.date,
      id: responseToDownvote.id
    }

    const updatedResponseList = this.state.responseList
      .filter(resp => resp.id !== id)
      .concat(downvotedResponse);
    this.setState({
      responseList: updatedResponseList,
      selectedPrompt: currentPrompt
    });
  }

  render() {
    let currentlyVisibleState = null;
    const filteredList = this.filterResponseList();

    if(this.state.formVisible) {
      currentlyVisibleState = <NewResponseForm
        prompt={this.state.selectedPrompt}
        hideResponseForm={this.hideForm}
        onNewResponseCreation={this.handleAddingResponseToPrompt}/>
    } else if (this.state.selectedPrompt !== null && this.state.selectedResponse === null) {
      currentlyVisibleState = <PromptDetails
        prompt={this.state.selectedPrompt}
        handleAddNewResponseClick={this.showForm}
        promptResponses={filteredList}
        onResponseSelection={this.handleChangingSelectedResponse}
        onUpvoting={this.handleUpvoting}
        onDownvoting={this.handleDownvoting}/>
    } else if (this.state.selectedPrompt !== null && this.state.selectedResponse !== null) {
      currentlyVisibleState = <ResponseDetails
        prompt={this.state.selectedPrompt}
        response={this.state.selectedResponse}/>
    } else {
      currentlyVisibleState = <Prompts/>
    }

    return (
      <React.Fragment>
        <Header
          handlePrompt1Click={this.showPrompt1}
          handlePrompt2Click={this.showPrompt2}
          handlePrompt3Click={this.showPrompt3}
          handlePrompt4Click={this.showPrompt4}/>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default ResponseControl;