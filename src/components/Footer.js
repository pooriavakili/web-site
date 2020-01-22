
import React, {Fragment, useContext} from 'react'
import {Link} from "react-router-dom";
import ContextProvider from "../stateManagment/Context";
export default function Footer() {
    useContext(ContextProvider)
    return(
        <Fragment>

            <ul className='Footer'>
                <li>
                    <Link  className='FooterLink'>Home</Link>
                </li>
                <li>
                    <Link  className='FooterLink'>SignIn</Link>
                </li>
                <li>
                    <Link  className='FooterLink'>Register</Link>
                </li>
                <li>
                    <Link  className='FooterLink'>search</Link>
                </li>
            </ul>

        </Fragment>
    )
}

