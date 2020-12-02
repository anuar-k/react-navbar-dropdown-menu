import React, {useState} from 'react';
import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Dropdown.css'

export default function Dropdown() {
    const [click, setClick] = useState(false);

    return (
        <>
            <ul onClick={()=> setClick(!click)}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.path}
                                  className={item.cName}
                                  onClick={()=> setClick(!click)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}