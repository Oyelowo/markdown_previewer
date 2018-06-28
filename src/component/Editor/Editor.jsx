import React from 'react';
import './Editor.css';
import Toolbar from '../Toolbar/Toolbar';

const editor = (props) => {
    let screenSizeConverter = props.isFullscreen
        ? 'EditorFullScreen'
        : 'EditorSmallScreen';
    return (
        <div>
            <Toolbar {...props}/>
            <textarea
                className={screenSizeConverter}
                id="editor"
                placeholder='Enter something in Github Markdown Format'
                value={props.value}
                onChange={props.onChange}/>
        </div>
    )
}

export default editor;
