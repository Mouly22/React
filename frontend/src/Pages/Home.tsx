import React from "react";
import "./Home.css"; // Replace with the correct path to your CSS file
import Example from "./Graph"; // Replace with the correct path to your Graph.tsx file

const Home: React.FC<{}> = () => {
    return (
        
        <div className="background">
            <h1>Welcome To Bangladesh Smart Agricultural System</h1>
            <Example />
        </div>
    );
};

export default Home;
