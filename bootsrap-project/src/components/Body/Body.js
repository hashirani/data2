import React, { useState } from 'react';
import data from "../../fakeData/index1.js";
import Product from '../Product/Product.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import './Body.css';

const Body = () => {
    const list=data.slice(0,20);
    //console.log(list);
    const [book ,setBook] =useState(list);
    const [title ,setTitle]=useState([])
    let settings ={
        infinite:true,
        speed:1000,
        arrow:true,
        slidesToShow:4,
        slidesToScroll:2,

        responsive:[
            
            {
                breakpoint:960,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:2,
                }

            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                }

            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:2,
                }

            },
        ]
    }
    const addName=(name)=>{ 
        const newName=[...title,name]    
        setTitle(newName)
    }
   // console.log(book)
    const headerStyle ={     
        width:'80%',
        margin:'auto',
    }
    const haderStyle ={
        color:'#00ffff',
        textDecoration:'underline',
       
        width:'80%',
        margin:'auto',
      
    }
    
  
   
    return (
        <div > 
       <div style={haderStyle}>
            <h2 style={{marginTop:'150px'}}>Now start</h2>
           {
               title.map(m=><h4>{m}</h4>)
           }
            <p style={{ display:'flex',justifyContent:'end'}}>See All</p> 
            </div>
        <div style={headerStyle}>
                    {book.lenght===0?(
                    <div className='spinner-border' role='status'>
                    <span className='sr-only'>Loading...</span>
                    </div>
                    ):(
                    <Slider {...settings}>
                    {book.map(books =><Product books={books} addName={addName}></Product>)}
                    </Slider>
                )}
        </div>
        </div>
        
    );
};

export default Body;