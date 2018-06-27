import React from 'react';
import './Previewer.css';

const previewer = (props) => {
    return (
        <div className='Previewer' id='preview' dangerouslySetInnerHTML={{__html: props.output}}>
        </div>
    )
}

export default previewer;
