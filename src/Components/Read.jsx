import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://648b4b7217f1536d65eabd71.mockapi.io/Crud")
      .then((response) => {
        setApiData(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteYourData = (id) => {
    axios
      .delete(`https://648b4b7217f1536d65eabd71.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      })
      .catch(() => {
        alert("I Think in your function a little bit problem");
      });
  };

  const setDataToStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="row">
        <div className="p-4 text-center text-primary">
          <h1>All Data</h1>
        </div>
        <div className="col-md-12">
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>MAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.e_name}</td>
                    <td>{item.e_age}</td>
                    <td>{item.e_mail}</td>
                    <td>
                      <Link to="/edit">
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            setDataToStorage(
                              item.id,
                              item.e_name,
                              item.e_age,
                              item.e_mail
                            )
                          }
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are You Sure You have delete this Function"
                            )
                          ) {
                            deleteYourData(item.id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mb-2 mt-2">
            <Link to="/create" className="d-grid">
              <button className="btn btn-success">Create New Data</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
