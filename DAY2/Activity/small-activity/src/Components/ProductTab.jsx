import Product from "./Product";
import "./ProductTab.css";
function ProductTab(){


    return(
<>


<div className="ProductTab">
<Product  title="Logic MX Master 35" idx={0}/>
<Product  title="Logic MX Master 35" idx={1}/>
<Product  title="Logic MX Master 35" idx={2}/>
<Product  title="Logic MX Master 35" idx={3}/>
</div>

</>
    );
}

export default ProductTab;