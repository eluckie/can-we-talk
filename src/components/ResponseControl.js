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
      selectedResponse: null
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
    this.setState({selectedPrompt: this.promptList[0]});
  }

  showPrompt2 = () => {
    this.setState({selectedPrompt: this.promptList[1]});
  }

  showPrompt3 = () => {
    this.setState({selectedPrompt: this.promptList[2]});
  }

  showPrompt4 = () => {
    this.setState({selectedPrompt: this.promptList[3]});
  }

  showForm = () => {
    this.setState({formVisible: true});
  }

  render() {
    let currentlyVisibleState = null;

    if(this.state.formVisible) {
      currentlyVisibleState = <NewResponseForm
        prompt={this.state.selectedPrompt}/>
    } else if (this.state.selectedPrompt !== null && this.state.selectedResponse === null) {
      currentlyVisibleState = <PromptDetails
        prompt={this.state.selectedPrompt}
        handleAddNewResponseClick={this.showForm}/>
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