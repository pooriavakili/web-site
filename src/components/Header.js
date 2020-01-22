import React,{Fragment} from "react";
import {Link} from "react-router-dom";
import './../style.css'
import Footer from "./Footer";
import Data from "./Data";
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
<div>
    <h1 className='Center'>Blog Mansoury</h1>
    <ul>
        <li className='LIOne'>
            <Link className='LinksOne'>Home</Link>
        </li>
        <li className='LIOne'>
            <Link className='LinksOne'>News</Link>
        </li>
        <li className='LIOne'>
            <Link className='LinksOne'>blog</Link>
        </li>
    </ul>
</div>
        <div >
            {
                Data.map((item,index)=>(
                    <div className='DivMaten' key={item.id}>
                        <img className='Img' src={item.aks} alt=""/>
                        <p>{item.maten}</p>
                    </div>
                ))
            }
        </div>
  <Footer/>
    </Fragment>
)
}