

import "./Price.css";

function Price({oldPrice,newPrice}){

    return(
<div className="Price">

<span style={{textDecoration:"line-through"}}>{oldPrice}</span>
&nbsp;
&nbsp;
<span style={{fontWeight:"bold"}}>{newPrice}</span>

</div>
    );
}

export default Price;