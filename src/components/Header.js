import React,{Fragment} from "react";
import {Link} from "react-router-dom";
import './../style.css'
import Footer from "./Footer";
import Data from "./Data";
import {FiMenu} from 'react-icons/fi'
export default function Header() {
    const Change=()=>{
        let menu=document.getElementById('menu')
        let nav=document.getElementById('nav')
        let exit=document.getElementById('exit')
        menu.addEventListener('click',function (e) {
      nav.classList.toggle('Ul');
      e.preventDefault()
        })
        exit.addEventListener('click',function (e) {
nav.classList.add('Ul')
            e.preventDefault()
        })
    }
return(
    <Fragment className='Fragment'>
<div className='Div'>
    <ul id='nav' className='Ul'>
<FiMenu onChange={Change} id='menu' className='Menu'/>
        <h1 className='Dot'>dot digital</h1>
        <li className='LI'>
            <img id='exit' className='Zarb' src={require('./../assets/img/zarbdar.png')} alt=""/>

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
        <div className='DivMaten'>
            {
                Data.map((item,index)=>(
                    <div  key={item.id}>
                        <div className='ImgOne'>
                        <img className='Img' src={item.aks} alt=""/>
                        </div>
                        <div className='GridOne'>
                        <p className='Grid'>{item.maten}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div style={{
            marginTop:"10em",

        }}>

  <Footer/>
        </div>
    </Fragment>
)
}