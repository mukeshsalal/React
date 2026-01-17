import "./ProductTab.css";
import Product from "./Product.jsx";

function ProductTab() {
  return (
    <div>
      <Product title="phone" price={30000} features={["fast","reliable"]} features2={{a:"fast",b:"reliable"}}  username="Mukesh " textColor="red"/>
      <Product title="laptop" price={40000} features={["Smooth","Durable"]} features2={{a:"Smooth",b:"Durable"}} username="Pranav" textColor="blue" />
      <Product title="Pen"  price={10} features={["Cheap","Effective"]} features2={{a:"Cheap",b:"Effective"}} username="Deepak" textColor="brown"/>
    </div>
  );
}

export default ProductTab;
