import React from 'react';
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss"
// Destructuring title so we can dynamically handle the tilte of each 
// menu-item exact same thing props.title except pulling the title value 
// off the props and setting into tile value inside the function
const MenuItem = ({ title, imageUrl, size, history,linkUrl , match}) => (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`// String Interpolation
            }}
        ></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);
// giving access to the history location and match