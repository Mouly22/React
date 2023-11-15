import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC<{}> = () => {
    return (
        <div className="sidebar" style={{ width: '10px' }}>
            <div className="sidebarItem">
                <span className="sidebarTitle">Updates</span>
                <Link to="/write" type="button" className="btn btn-outline-dark me-2"> Create a post </Link>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Farming</li>
                    <li className="sidebarListItem">Vegeies</li>
                    <li className="sidebarListItem">Agrotech</li>
                    <li className="sidebarListItem">Milk</li>
                    <li className="sidebarListItem">Green</li>
                    <li className="sidebarListItem">Business</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;