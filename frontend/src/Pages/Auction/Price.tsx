import React from "react";


const Price: React.FC<{}> = () => {
    return (
        <div>
        <h3 className = "sidebar-title price-title"><span className="sidebarTitle">Price </span></h3>

        <label className = "sidebar-label-container">
            <input type="radio" name = "test2"/>
            <span className = "checkmark"></span>All
        </label>
        <br/>
        <label className = "sidebar-label-container">
            <input type="radio" name = "test2"/>
            <span className = "checkmark"></span>$0 - $150
        </label>
        <br/>
        <label className = "sidebar-label-container">
            <input type="radio" name = "test2"/>
            <span className = "checkmark"></span>$150 - $300
        </label>
        <br/>
        <label className = "sidebar-label-container">
            <input type="radio" name = "test2"/>
            <span className = "checkmark"></span>$300+
        </label>
        </div>
    );
};
export default Price;