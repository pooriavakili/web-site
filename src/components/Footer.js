
import React, {Fragment, useContext} from 'react'
import {Link} from "react-router-dom";
import {FaTelegram,FaFacebook,FaTwitter,FaPinterest} from 'react-icons/fa'
import ContextProvider from "../stateManagment/Context";
export default function Footer() {
    useContext(ContextProvider)
    return(
        <Fragment>
            <div className='Footer'>
            <ul>
                <h1 className='FooterStyle'>dot digital</h1>
                <li>
                    <div className='FooterLink'>
                    <Link  >
                    <FaTelegram
                                className='StyleLink'
                    />
                    </Link>
                    </div>
                </li>
                <li>
                    <Link  >
                        <div className='FooterLink'  >
                        <FaFacebook className='StyleLink'
                        />
                        </div>
                    </Link>

                </li>
                <li>
                    <Link  >
                        <div className='FooterLink' >
                            <FaTwitter
                                className='StyleLink'
                            />
                        </div>

                    </Link>
                </li>
                <li>
                    <Link>
                        <div className='FooterLink'>
                            <FaPinterest className='StyleLink' />
                        </div>
                    </Link>
                </li>
            </ul>
                <div className='CopyRight'>
                    <h1 className='CopyRightStyle'>&copy;copyRight 2020 All Rights Reserved</h1>
                </div>
            </div>

        </Fragment>
    )
}

