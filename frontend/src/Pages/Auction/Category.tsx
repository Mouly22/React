import React from "react";
import "./Category.css"

const Category: React.FC<{}> = () => {
    return (
        <div>


        <h3 className = "sidebar-title"><span className="sidebarTitle">Category 🛒 </span></h3>
            <div>
            <label className = "sidebar-label-container">
                
                <input type= "radio" name = "test"/>
                <span className = "checkmark"></span>All
            </label>
            <br/>
            <label className = "sidebar-label-container">
                <input type= "radio" name = "test"/>
                <span className = "checkmark"></span>Crops
            </label>
            <br/>
            <label className = "sidebar-label-container">
                <input type= "radio" name = "test"/>
                <span className = "checkmark"></span>Vegetables
            </label>
            <br/>
            <label className = "sidebar-label-container">
                <input type= "radio" name = "test"/>
                <span className = "checkmark"></span>Fruits
            </label>
            </div>
        </div>
        
    );
};
export default Category;