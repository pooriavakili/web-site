import React,{Fragment} from "react";
import {Link} from "react-router-dom";
import './../style.css'
export default function Header() {
return(
    <Fragment>
<div className='Div'>

    <ul className='Ul'>
        <h1 className='Dot'>dot digital</h1>
        <li className='LI'>
            <Link className='Links'>Home</Link>
        </li>
        <li className='LI'>
            <Link className='Links'>about</Link>
        </li>
        <li className='LI'>
            <Link className='Links'>News</Link>
        </li >
        <li className='LI'>
            <Link className='Links'>blog</Link>
        </li>
        <li className='LI'>
            <Link className='Links'>signin</Link>
        </li>
        <li className='LI'>
            <Link className='Links'>signup</Link>
        </li>
    </ul>
</div>

    </Fragment>
)
}