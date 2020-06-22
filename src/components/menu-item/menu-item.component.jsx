import React from 'react';
import "./menu-item.styles.scss"
// Destructuring title so we can dynamically handle the tilte of each 
// menu-item exact same thing props.title except pulling the title value 
// off the props and setting into tile value inside the function
const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
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

export default MenuItem;