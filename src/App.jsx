import React, {Component} from 'react';
import './App.css';
import Editor from './component/Editor/Editor';
import Previewer from './component/Previewer/Previewer';
import marked from 'marked';

class App extends Component {
  state = {
    markdownInput: ''
  }

  onChangeHandler = (event) => {
    this.setState({markdownInput: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Editor value={this.state.markdownInput} onChange={this.onChangeHandler}/>
        <Previewer className='height' output={marked(this.state.markdownInput)}  />
      </div>
    );
  }
}

export default App;
