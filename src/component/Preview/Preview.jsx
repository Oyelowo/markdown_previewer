import React from 'react';
import './Preview.css';
import Toolbar from '../Toolbar/Toolbar';
// import Auxi from '../../hoc/Auxi/Auxi';

const preview = (props) => {
    let screenSizeConverter = props.isFullscreen ? 'PreviewFullScreen': 'Preview';
    return (
        <div>
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
