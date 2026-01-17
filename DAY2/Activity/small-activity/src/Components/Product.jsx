
import Price from "./Price";
import "./Product.css";
function Product({title,idx}){

let oldPrice = ["12,999","14,999","15,999","16,999"];
let newPrice = ["13,000","15,000","16,000","17,000"];
let description = [["8,000 DPI","5 programmable Button"],["Intutive Surface" , "Designed for IPad Pro"],["Designed for IPad Pro","Intutive Surface"],["Wireless","Designed for IPad Pro"]]
return(
<div className="Product">
<h4>{title}</h4>
<p>{description[idx][0]}</p>
<p>{description[idx][1]}</p>
<Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
</div>

);
}

export default Product;
