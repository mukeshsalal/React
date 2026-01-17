

import "./Product.css";

function Product({title,price,features, features2,username,textColor}){
    // console.log(props); // It is object
    // console.log(features); // It is Array
    return(

<div className="Product" style={{backgroundColor:price>=100 ? "lightblue" : null}}>

    <h2>Title : {title}</h2>
    <h2>Price : {price}</h2>

    <ul>{ features.map((el)=><li>{el}</li>)}</ul>
    <p>{features2.a} , {features2.b}</p>

    {price>=1000 ? <p>Discount = 5%</p> : null} 
    {price>=1000 && <p>Discount = 5%</p>}

    <p style={{color:textColor}}>Hello {username}</p>

</div>

    );
}

export default Product;