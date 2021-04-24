import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {Button } from 'react-bootstrap';

import './Product.css';



const Product = (props) => {
    const {name,img,salary,age,country}=props.books;
    const addName=props.addName
    const [land, setLand]=useState("");
    //console.log(props.pd)
    const showCountry=()=>
        setLand(country)
      
    
 
    //console.log(settings)
    // const cardStyle = {        
    //         textAlign:'center',
    //         /* border: 1px solid #fff; */
    //         borderRadius:'5px',
    //        marginBottom:'5px',
    //        marginRight: '5px',
    //        paddingBottom: '5px',
    //        marginTop: '30px',
    //        width:'250px',
    //        height:'350px',
    //        boxShadow:' 0 4px 8px 0 gray',         
    //     }
    return (
        <div>
            
            <div className='slider'>
            <img  style={{ height:"200px",width:"340px", }}src={img} alt=""/>
            <h3  style={{ marginTop:"30px",color:"#00ffff",textDecoration:'underline'}}>Name:{name}</h3>
            <p><small>Price:{salary}</small></p>
           
            <p>Country Name:{land}</p>
            <Button variant='dark'onClick={showCountry} >Add</Button>
            <Button  onClick={()=>addName(name)}variant='primary'>Anroll Now</Button>
            </div>
        </div>
    );

};

export default Product;