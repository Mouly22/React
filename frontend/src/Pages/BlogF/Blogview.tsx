import React from "react";
import "./Blogview.css"
import Blog from "./Blog";
import Sidebar from "./Sidebar";




const Blogview: React.FC<{}> = () => {
    return (
            <>
            <div className="blogview" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
                <Blog/>
                <Sidebar/> 
            </div>
            </>
    );
};
export default Blogview;