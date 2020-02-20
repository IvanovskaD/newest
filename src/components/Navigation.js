import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation = () => {
    return(
        <ul>
            <li><Link> to ="./"<Link/></li>
            <li><Link target ="_blank" to="/info">Info</Link></li>
            <li><Link to ="./"/></li>
        </ul>
    )
}