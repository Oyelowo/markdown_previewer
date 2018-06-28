import React from 'react';
import './Preview.css';
import Toolbar from '../Toolbar/Toolbar';
// import Auxi from '../../hoc/Auxi/Auxi';

const preview = (props) => {
    let screenSizeConverter = !props.isFullscreen
        ? 'PreviewHalfScreen'
        : 'FullScreenPadding';
    let PreviewFullScreen = props.isFullscreen
        ? 'PreviewFullScreen'
        : null;

    let outputWindow = <div
        id='preview'
        dangerouslySetInnerHTML={{
        __html: props.output
    }}></div>;

    if (props.windowType === 'htmlCode') {
        outputWindow = <div><pre>{props.htmlCode}</pre></div>
    }
    return (
        <div className={PreviewFullScreen}>
            <Toolbar {...props}/>

            <div className={screenSizeConverter}>

                {outputWindow}
            </div>
        </div>
    )
}

export default preview;
