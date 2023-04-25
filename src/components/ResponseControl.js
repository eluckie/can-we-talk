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

  showPrompt1 = () => {
    this.setState({selectedPrompt: 1});
  }

  showPrompt2 = () => {
    this.setState({selectedPrompt: 2});
  }

  showPrompt3 = () => {
    this.setState({selectedPrompt: 3});
  }

  showPrompt4 = () => {
    this.setState({selectedPrompt: 4});
  }

  render() {
    let currentlyVisibleState = null;

    if(this.state.formVisible) {
      currentlyVisibleState = <NewResponseForm
        prompt={this.state.selectedPrompt}/>
    } else if (this.state.selectedPrompt !== null && this.state.selectedResponse === null) {
      currentlyVisibleState = <PromptDetails
        prompt={this.state.selectedPrompt}/>
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