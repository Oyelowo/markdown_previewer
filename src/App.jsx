import React, {Component} from 'react';
import './App.css';
import Editor from './component/Editor/Editor';
import Preview from './component/Preview/Preview';
import marked from 'marked';
import {sampleText} from './SampleText';

class App extends Component {
  state = {
    markdownInput: sampleText,
    EditorIsFullscreen: false,
    PreviewIsFullscreen: false
  }

  onChangeHandler = (event) => {
    this.setState({markdownInput: event.target.value})
  }

  toggleEditorScreenSize = () => {
    this.setState({
      EditorIsFullscreen: !this.state.EditorIsFullscreen
    });
  }

  togglePreviewScreenSize = () => {
    this.setState({
      PreviewIsFullscreen: !this.state.PreviewIsFullscreen
    });
  }

  render() {

    const {EditorIsFullscreen, PreviewFullScreen} = this.state;
    // let screenSizeConverter = EditorIsFullscreen || PreviewFullScreen   ?
    // 'FullScreen'   : 'SplitScreen';

    let screenSizeConverter = EditorIsFullscreen || PreviewFullScreen
      ? 'FullScreen'
      : 'SplitScreen';

    return (
      <div className={screenSizeConverter}>
        <Editor
          isFullscreen={this.state.EditorIsFullscreen}
          onClick={this.toggleEditorScreenSize}
          id='editor'
          value={this.state.markdownInput}
          onChange={this.onChangeHandler}/>
        <Preview
          isFullscreen={this.state.PreviewIsFullscreen}
          onClick={this.togglePreviewScreenSize}
          id='preview'
          output={marked(this.state.markdownInput)}className='height'/>
      </div>
    );
  }
}

export default App;
