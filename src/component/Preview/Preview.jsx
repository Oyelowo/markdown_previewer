import React from 'react';
import './Preview.css';
import Toolbar from '../Toolbar/Toolbar';
// import Auxi from '../../hoc/Auxi/Auxi';

const preview = (props) => {
    let screenSizeConverter = !props.isFullscreen ? 'Preview' : null;
    let PreviewFullScreen = props.isFullscreen ? 'PreviewFullScreen' : null;

    return (
        <div className={PreviewFullScreen}>
            <Toolbar {...props}/>
            <div
                className= {screenSizeConverter}
                id='preview'
                dangerouslySetInnerHTML={{
                __html: props.output
            }}></div>

        </div>
    )
}

export default preview;
