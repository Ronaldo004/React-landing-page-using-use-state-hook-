import React,{useState} from 'react';
import Menu from './menuapi';
import Component from './Component';
import "./media.css";
import Navbar from './Navbar';

import "./style.css"
const uniquelist=[
  ...new Set(
    Menu.map((curelem)=>{
      return curelem.catagory;
    })
  ),
  "All",
]


const Resturant = () => {
  let [menuData,setMenudata]=useState(Menu);
  let [menuList,setMenulist]=useState(uniquelist);
  const filteritem =(category)=>{
    if (category === "All") {
      setMenudata(Menu);
      return;
    }
    const updatelist=Menu.filter((curelem)=>{
     return curelem.catagory === category;
    });
     setMenudata(updatelist);
    
    
  };
 
  
  return ( 
  <>
  <Navbar listData={filteritem} menuList={menuList} /> 
  <Component menuData={menuData}/>
  </>);
  
};

export default Resturant;