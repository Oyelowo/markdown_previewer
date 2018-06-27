import React, {Component} from 'react';
import './App.css';
import Editor from './component/Editor/Editor';
import Preview from './component/Preview/Preview';
import marked from 'marked';
import { sampleText } from './SampleText';

class App extends Component {
  state = {
    markdownInput: sampleText
  }

  onChangeHandler = (event) => {
    this.setState({markdownInput: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Editor id='editor' value={this.state.markdownInput} onChange={this.onChangeHandler}/>
        <Preview className='height' id='preview' output={marked(this.state.markdownInput)}  />
      </div>
    );
  }
}

export default App;
