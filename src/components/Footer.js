
import React, {Fragment, useContext} from 'react'
import {Link} from "react-router-dom";
import ContextProvider from "../stateManagment/Context";
export default function Footer() {
    useContext(ContextProvider)
    return(
        <Fragment>

            <ul className='Footer'>
                <li>
                    <Link  className='FooterLink'></Link>
                </li>
                <li>
                    <Link  className='FooterLink'></Link>
                </li>
                <li>
                    <Link  className='FooterLink'></Link>
                </li>
                <li>
                    <Link  className='FooterLink'></Link>
                </li>
            </ul>

        </Fragment>
    )
}

