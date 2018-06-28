import React from 'react';
import './Toolbar.css';

const Toolbar = (props) => {
    const screenToggleIcon = props.isFullscreen
        ?  <i className="fas fa-compress"  onClick={props.onClick}></i>
        : <i className="fas fa-arrows-alt"  onClick={props.onClick}></i>

    const toolBarSizeToggler = props.isFullscreen
        ? 'ToolbarLarge'
        : 'ToolbarSmall';
    return (
        <div className={toolBarSizeToggler}> <span className='windowPan'>{props.windowPan}</span>{screenToggleIcon}</div>
    )
}

export default Toolbar;
