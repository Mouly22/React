import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import DataFormComponent_login from "./Pages/Login"; //login page
import SignupForm from "./Pages/SignUp";
import Home from "./Pages/Home";
import Admin_Page from "./views/admin";
import Blog from "./Pages/BlogF/Blog"
import './App.css';
import SinglePost from "./Pages/BlogF/singlePost"
import ASidebar from "./Pages/Auction/ASidebar";
import Write from "./Pages/BlogF/write"
import Graph from './Pages/Graph'
import Deliveryman_View from './Pages/Deliveryman_View'
import Form from './Pages/Form'
import Blogview from "./Pages/BlogF/Blogview";
import Profile from './Pages/Profile';
import Delivery from './Pages/Delivery';
import Status_delivery from './Pages/Status_delivery';
import Farmer_review from './Pages/Farmer_review';
import Search from "./Pages/BlogF/search";
import Auction from "./Pages/Auction/Auction";
import PostCreate from "./Pages/Auction/postCreate";
import PostDetails from "./Pages/Auction/PostDetails";
import AdminPost from "./Pages/Auction/AdminPost";
import AdminDetails from "./Pages/Auction/AdminDetails";
import PayView from "./Pages/Payment/PayView";
//import Field_Officer_Page from "./views/field_officer";
import Field_officer_Page from "./views_field_officers/Field_officer_view";
import Expert_Page from "./views_expert/expert_view";
import SignupForm_for_admin from "./views/admin_show_admin_adding_page";
import Businessmen_Page from "./views_businessmen/businessmen_view";
import Farmer_Page from "./views_farmer/farmer_view";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<DataFormComponent_login/>}/>
            <Route path="/signup" element={<SignupForm/>}/>
            <Route path="/Blog" element={<Blog/>}/>
            <Route path = "/singlePost/:postId" element= {<SinglePost/>}/>
            <Route path = "/write" element= {<Write/>}/>
            <Route path = "/blogview" element= {<Blogview/>}/>
            <Route path = "/search" element= {<Search/>}/>
            <Route path = "/asidebar" element= {<ASidebar/>}/>
            <Route path = "/postcreate" element = {<PostCreate/>}/>
            <Route path = "/auction" element = {<Auction/>}/>
            <Route path = "/postdetails/:postId" element = {<PostDetails/>}/>
            <Route path = "/adminpost" element = {<AdminPost/>}/>
            <Route path = "/admindetails/:postId" element = {<AdminDetails/>}/>
            <Route path = "/payview" element = {<PayView/>}/>

            <Route path = "/profile" element= {<Profile/>}/>
            <Route path = "/graph" element= {<Graph/>}/>
            <Route path = "/form" element= {<Form/>}/>
            <Route path = "/farmer_review" element= {<Farmer_review/>}/>
            <Route path = "/delivery" element= {<Delivery/>}/>
            <Route path = "/deliveryman" element= {<Deliveryman_View/>}/>
            <Route path = "/status_delivery" element= {<Status_delivery/>}/>
         
            
            <Route
              path="/admin"
              element={<Admin_Page />} // Display the Admin_Page component
            />
                          <Route
              path="/add_admins"
              element={<SignupForm_for_admin />} // Display the Admin_Page component
            />
              <Route
              path="/field_officer"
              element={<Field_officer_Page />} // Display the Field Officer component
            />
              <Route
              path="/expert"
              element={<Expert_Page />} // Display the Expert component
            />
              <Route
              path="/businessman"
              element={<Businessmen_Page />} // Display the Businessmen component
            />
              <Route
              path="/farmer"
              element={<Farmer_Page />} // Display the Farmer component
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>

  )

}

export default App;
