import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const navigate = useNavigate();

  const updatedData = (e) => {
    e.preventDefault();
    axios
      .put(`https://648b4b7217f1536d65eabd71.mockapi.io/Crud/${id}`, {
        e_name: name,
        e_age: age,
        e_mail: email,
      })
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("Your Data Not Updated Successfully");
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="p-4 text-center text-primary">
            <h1>Please Update your Data</h1>
          </div>
          <form onSubmit={updatedData}>
            <div className="form-group mb-3">
              <label>Enter Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label>Enter Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label>Enter Email:</label>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <br />
            <div className="d-grid">
              <input
                type="submit"
                value="update"
                className="btn btn-primary "
              />
            </div>
            <Link to="/" className="d-grid mt-3">
              <button className="btn btn-secondary">Read Data</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
