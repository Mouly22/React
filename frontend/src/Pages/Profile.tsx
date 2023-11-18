import React, { useEffect, useState } from "react";
import axios from "axios";
import "./user.css";
import { Password } from "@mui/icons-material";

interface User {
  userid: string;
  password: string;
  email: string;
  address: string;
  nid: number;
  user_type: string;
}

const Home: React.FC<{}> = () => {
  const [userid, setUserid] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userid");
    setUserid(storedUserId || "");
  });

  const endpoint = "http://127.0.0.1:8000/login_all_login/";

  const [formData, setFormData] = useState<User>({
    userid: "",
    password: "",
    email: "",
    address: "",
    nid: 0,
    user_type: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData)
    // setUsers(users.map((user) => (user.userid === userid ? formData : user)));
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/edit_all_login/",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("update failed" , error);
    }
  };

  useEffect(() => {
    fetchData(endpoint, userid)
      .then((ret) => {
        console.log(ret.data);
        setUsers([ret.data.user_data]);
      })
      .catch((error) => console.log(error));
  }, [userid]);

  const fetchData = async (endpoint: string, userid: string) => {
    const ret = { data: [], error: false };
    try {
      const response = await axios.post(`${endpoint}`, { userid });
      setRefresh(!refresh);
      ret.data = response.data;
      return ret;
    } catch (error) {
      console.log(error);
      ret.error = true;
      return ret;
    }
  };

  return (
    <div>


      {users.map((user, index) => (
        <div key={index}>
          {!isEditing ? (
            <div>
              <div className="page-content page-container" id="page-content">
                <div className="padding">
                  <div className="row container d-flex justify-content-center">
                    <div className="col-xl-6 col-md-12">
                      <div className="card user-card-full">
                        <div className="row m-l-0 m-r-0">
                          <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                              <div className="m-b-25">
                                {/* <img src={"https://img.icons8.com/bubbles/100/000000/user.png"} className="img-radius" alt="User-Profile-Image"> */}
                              </div>
                              <h6 className="f-w-600">{user.userid}</h6>
                              <p>{user.user_type}</p>
                              <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="card-block">
                              <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                                Information
                              </h6>
                              <div className="row">
                                <div className="col-sm-8">
                                  <p className="m-b-10 f-w-600">Email</p>
                                  <h6 className="text-muted f-w-400">
                                    {user.email}
                                  </h6>
                                </div>
                                <div className="col-sm-4">
                                  <p className="m-b-10 f-w-600">NID</p>
                                  <h6 className="text-muted f-w-400">
                                    {user.nid}
                                  </h6>
                                </div>
                              </div>
                              <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                Projects
                              </h6>
                              <div className="row">
                                <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600">Role</p>
                                  <h6 className="text-muted f-w-400">
                                    {user.user_type}
                                  </h6>
                                </div>
                                <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600">Address</p>
                                  <h6 className="text-muted f-w-400">
                                    {user.address}
                                  </h6>
                                </div>
                              </div>
                              <ul className="social-link list-unstyled m-t-40 m-b-10">
                                <li>
                                  <a
                                    href="#!"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title=""
                                    data-original-title="facebook"
                                    data-abc="true"
                                  >
                                    <i
                                      className="mdi mdi-facebook feather icon-facebook facebook"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#!"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title=""
                                    data-original-title="twitter"
                                    data-abc="true"
                                  >
                                    <i
                                      className="mdi mdi-twitter feather icon-twitter twitter"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#!"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title=""
                                    data-original-title="instagram"
                                    data-abc="true"
                                  >
                                    <i
                                      className="mdi mdi-instagram feather icon-instagram instagram"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </li>
                                <div className="d-flex justify-content-center">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => setIsEditing(true)}
                                  >
                                    Edit
                                  </button>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // <div className="card mx-auto" style={{ maxWidth: "500px" }}>
            //   <div className="card-body">
            //     <h1 className="card-title text-center mt-3 mb-3">
            //       Edit User Profile
            //     </h1>
            //     <form>
            //       <div className="card-text w-100">
            //     <label className="form-label w-100">
            //       <b>User ID:</b>
            //       <input
            //         type="text"
            //         name="userid"
            //         className="form-control"
            //         value={user.userid}
            //         onChange={handleInputChange}
            //       />
            //     </label>
            //     <br />
            //   </div>

            //   <div className="mb-2 w-100">
            //     <label className="form-label w-100">
            //       <b>Email:</b>
            //       <input
            //         type="text"
            //         name="email"
            //         className="form-control"
            //         value={user.email}
            //         // onChange={handleInputChange}
            //       />
            //     </label>
            //     <br />
            //   </div>
            //   <div className="mb-2 w-100">
            //     <label className="form-label w-100">
            //       <b>Address:</b>
            //       <input
            //         type="text"
            //         name="address"
            //         className="form-control"
            //         value={user.address}
            //         // onChange={handleInputChange}
            //       />
            //     </label>
            //     <br />
            //   </div>

            //   <div className="mb-2 w-100">
            //     <label className="form-label w-100">
            //       <b>NID:</b>
            //       <input
            //         type="number"
            //         name="nid"
            //         className="form-control"
            //         value={user.nid}
            //         // onChange={handleInputChange}
            //       />
            //     </label>
            //     <br />
            //   </div>

            //       <div className="d-flex justify-content-center">
            //         <button
            //           type="button"
            //           className="btn btn-success"
            //           onClick={() => setIsEditing(false)}
            //         >
            //           Save
            //         </button>
            //       </div>
            //     </form>
            //   </div>
            // </div>

            <div>
               <h1 className="card-title mt-3 mb-3">
      Edit User Profile
  </h1>
            <form onSubmit={handleSubmit}>
              <div>
              <b>User ID     :  </b>
              <input
                type="text"
                name="userid"
                value={formData.userid=userid}
                onChange={handleInputChange}
              /></div>
              <div><b>Password :</b><input
                type="password"
                name="password"
                value={formData.password=user.password}
                onChange={handleInputChange}
              /></div><div><b>Email:</b>
              <input
                type="email"
                name="email"
                placeholder={user.email}
                value={formData.email}
                onChange={handleInputChange}
              /></div><div><b>Address:</b>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              /></div><div><b>NID:</b>
              <input
                type="number"
                name="nid"
                value={formData.nid}
                onChange={handleInputChange}
              /></div><div><b>Role :</b>
              <input
                type="text"
                name="user_type"
                value={formData.user_type=user.user_type}
                onChange={handleInputChange}
              /></div><div>
              <button  type="submit" >Submit</button></div>
              <div>
              <button  type="button" onClick={() => setIsEditing(false)}>Back to profile</button></div>

            </form>
          </div>

          )}
        </div>
      ))}
    </div>
  );
};

export default Home;