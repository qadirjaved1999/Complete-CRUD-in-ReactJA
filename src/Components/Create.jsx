import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Inserting data in Mockapi
    axios
      .post("https://648b4b7217f1536d65eabd71.mockapi.io/Crud", {
        e_name: name,
        e_age: age,
        e_mail: email,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="p-4 text-center text-primary">
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Enter Name:</label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label>Enter Age:</label>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label>Enter Email:</label>
              <input
                type="email"
                placeholder="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <input
                type="submit"
                value="submit"
                className="btn btn-primary "
              />
            </div>
            <Link to="/" className="d-grid mt-3">
              <button className="btn btn-secondary">Read Data</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
