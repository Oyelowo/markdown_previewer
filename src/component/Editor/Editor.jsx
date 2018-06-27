import React from 'react';
import './Editor.css';

const editor = (props) => {
    return (
        <div>
            <textarea
                className='Textarea'
                id="editor"
                placeholder='Enter something'
                value={props.value}
                onChange={props.onChange}/>
        </div>
    )
}

export default editor;
