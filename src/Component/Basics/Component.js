import React from 'react'





const Component = ({menuData}) => {
    console.log(menuData);
    return (
  <>
  <div className='cartContainer'>
  {menuData.map((curElem) =>{
    let{id,Name,cat,price,description,image}=curElem;
console.log(image)
return (
  
 
    <div className='cartS'>
        <span className='cartNo'><h1>{id}</h1></span>
        <span className='cartTitle'><p>{cat}</p></span>
        <h2 className='cartHeading'>{Name}</h2>
        <span className='cartDes'>{description}</span>
        <div className='cartRead'>________Read</div>
        <div className='Image'><img src={image}></img><h2>Price:{price} RS</h2></div>
        <button className='btn-sm'> Order now</button>
    
    </div>

  );
})}
</div>
  </>
 
)
}


export default Component