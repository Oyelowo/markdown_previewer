import React, {Component} from 'react';
import './App.css';
import Editor from './component/Editor/Editor';
import Preview from './component/Preview/Preview';
import marked from 'marked';
import {sampleText} from './SampleText';

class App extends Component {
  state = {
    markdownInput: sampleText,
    EditorIsFullScreen: false,
    PreviewIsFullScreen: false
  }

  onChangeHandler = (event) => {
    this.setState({markdownInput: event.target.value})
  }

  toggleEditorScreenSize = () => {
    this.setState({
      EditorIsFullScreen: !this.state.EditorIsFullScreen
    });
  }

  togglePreviewScreenSize = () => {
    this.setState({
      PreviewIsFullScreen: !this.state.PreviewIsFullScreen
    });
  }

  render() {

    const {EditorIsFullScreen, PreviewIsFullScreen} = this.state;
    // let screenSizeConverter = EditorIsFullscreen || PreviewFullScreen   ?
    // 'FullScreen'   : 'SplitScreen';

    let screenSizeConverter = EditorIsFullScreen || PreviewIsFullScreen
      ? 'FullScreen'
      : 'SplitScreen';

    let HidePreview = EditorIsFullScreen
      ? 'HidePreview'
      : null;

    let HideEditor = PreviewIsFullScreen
      ? 'HideEditor'
      : null;

    return (
      <div className={screenSizeConverter}>
        <div className={HideEditor}>
          <Editor
            windowPan='Editor'
            isFullscreen={this.state.EditorIsFullScreen}
            onClick={this.toggleEditorScreenSize}
            id='editor'
            value={this.state.markdownInput}
            onChange={this.onChangeHandler}/>
        </div>

        <div className={HidePreview}>
          <Preview
            windowPan='Previewer'
            isFullscreen={this.state.PreviewIsFullScreen}
            onClick={this.togglePreviewScreenSize}
            id='preview'
            output={marked(this.state.markdownInput)}/></div>
      </div>
    );
  }
}

export default App;
