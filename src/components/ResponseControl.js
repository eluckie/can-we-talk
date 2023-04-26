import React from "react";
import Prompts from "./Prompts";
import NewResponseForm from "./NewResponseForm";
import PromptDetails from "./PromptDetails";
import Header from "./Header";

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
    const filteredResponses = this.state.responseList.filter(resp => resp.prompt.id === this.promptList[0].id);
    this.setState({
      selectedPrompt: this.promptList[0],
      selectedPromptsResponses: filteredResponses
    });
  }

  showPrompt2 = () => {
    this.setState({selectedPrompt: this.promptList[1]});
    const filteredList = this.filterResponseList();
    this.setState({selectedPromptsResponses: filteredList});
  }

  showPrompt3 = () => {
    this.setState({selectedPrompt: this.promptList[2]});
    const filteredList = this.filterResponseList();
    this.setState({selectedPromptsResponses: filteredList});
  }

  showPrompt4 = () => {
    this.setState({selectedPrompt: this.promptList[3]});
    const filteredList = this.filterResponseList();
    this.setState({selectedPromptsResponses: filteredList});
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
    const filteredResponses = this.state.responseList.filter(resp => resp.prompt.id === this.state.selectedPrompt.id);
    return filteredResponses;
  }

  render() {
    let currentlyVisibleState = null;
    let filteredList = this.filterResponseList();

    if(this.state.formVisible) {
      currentlyVisibleState = <NewResponseForm
        prompt={this.state.selectedPrompt}
        hideResponseForm={this.hideForm}
        onNewResponseCreation={this.handleAddingResponseToPrompt}/>
    } else if (this.state.selectedPrompt !== null && this.state.selectedResponse === null) {
      currentlyVisibleState = <PromptDetails
        prompt={this.state.selectedPrompt}
        handleAddNewResponseClick={this.showForm}
        promptResponses={filteredList}/>
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