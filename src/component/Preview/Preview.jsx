import React from 'react';
import './Preview.css';

const preview = (props) => {
    return (
        <div className='Preview' id='preview' dangerouslySetInnerHTML={{__html: props.output}}>
        </div>
    )
}

export default preview;
