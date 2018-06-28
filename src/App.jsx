import React, {Component} from 'react';
import './App.css';
import Editor from './component/Editor/Editor';
import Preview from './component/Preview/Preview';
import marked from 'marked';
import {sampleText} from './assets/SampleText';

class App extends Component {
  state = {
    markdownInput: sampleText,
    EditorIsFullScreen: false,
    PreviewIsFullScreen: false,
    selectWindow: 'previewer'
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

  selectChangeHandler = (event) => {
    this.setState({selectWindow: event.target.value})
  }

  render() {

    const {EditorIsFullScreen, PreviewIsFullScreen, selectWindow} = this.state;
    let screenSizeConverter = EditorIsFullScreen || PreviewIsFullScreen
      ? 'FullScreen'
      : 'SplitScreen';

    let HidePreview = EditorIsFullScreen
      ? 'HidePreview'
      : null;

    let HideEditor = PreviewIsFullScreen
      ? 'HideEditor'
      : null;

    let selectWindowsOptions = <select
      defaultValue={selectWindow}
      onChange={this.selectChangeHandler}
      name="windowsPan">
      <option value="previewer">Previewer</option>
      <option value="htmlCode">Html Code</option>
    </select>

    // enable line breaks with returh button. This is set later  in the Preview tag
    // but can also be set as below: marked.setOptions({breaks: true}); include
    // target="_blank" inside the anchor tag.
    const markedJsRenderer = new marked.Renderer();
    markedJsRenderer.link = (href, title, text) => `<a target="_blank" href="${href}">${text} </a>`;

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
            windowPan={selectWindowsOptions}
            windowType={selectWindow}
            isFullscreen={this.state.PreviewIsFullScreen}
            onClick={this.togglePreviewScreenSize}
            id='preview'
            output={marked(this.state.markdownInput, {
            renderer: markedJsRenderer,
            breaks: true
          })}
            htmlCode={marked(this.state.markdownInput)}/></div>

      </div>
    );
  }
}

export default App;
