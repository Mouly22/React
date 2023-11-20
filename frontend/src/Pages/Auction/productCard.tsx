import React from "react";
import PotatoImg from "./Aimages/potato.jpg";
import "./productCard.css"

const ProductCard: React.FC<{}> = () => {
  return (
      <div className ="col-3">
        <div className = "product-card">
            <div className = "product-image">
                <img src={PotatoImg} alt ="product" style={{ width: "200px", height: "150px" }}/>
            </div>

            
         

           
        </div>
      </div>

  );
};

export default ProductCard;