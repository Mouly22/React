import Category from "./Category";
import Price from "./Price";
import { Link } from "react-router-dom";
const ASidebar: React.FC<{}> = () => {
    return (
    <div className="sidebar">
        <div className="search-container">
            <input type="text" placeholder="Search..." />
            <button type="button" className="btnn">
                Search
            </button>
        <br/>
        <Category />
        <Price />
        </div>
        <div>
        <span className="sidebarTitle"></span>
        <Link to="/postcreate" type="button" className="btnn">
            Create New Post
        </Link>
        </div>
    </div>

);
};
export default ASidebar;