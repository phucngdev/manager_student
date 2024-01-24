import React, { useState, useEffect } from "react";
import ListStudent from "./ListStudent";
import Form from "./Form";

const Main = () => {
  const [show, setShow] = useState(false);
  const [students, setStudents] = useState(() => {
    const studentLocal = JSON.parse(localStorage.getItem("student")) || [];
    return studentLocal;
  });
  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("student")));
  }, [localStorage.getItem("student")]);
  const handleShow = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleDelete = (msv) => {
    let newLocal = students.filter((idDelete) => idDelete.msv !== msv);
    localStorage.setItem("student", JSON.stringify(newLocal));
    setStudents(newLocal);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <div className="card-header">
              <div className="row">
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-icon-text"
                    onClick={handleShow}
                  >
                    Thêm mới sinh viên
                  </button>
                </div>
                <div className="col-6">
                  <form className="search-form" action="#">
                    <i className="icon-search" />
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Here"
                      title="Search here"
                    />
                    <button className="btn btn-primary btn-icon-text">
                      Tìm kiếm
                    </button>
                  </form>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <select className="form-control">
                    <option value="">Sắp xếp</option>
                    <option value="">ABC def</option>
                    <option value="">ABC def</option>
                    <option value="">ABC def</option>
                  </select>
                </div>
              </div>
            </div>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent
              students={students}
              handleDelete={handleDelete}
            ></ListStudent>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {show && <Form handleClose={handleClose} students={students}></Form>}
      </div>
    </>
  );
};

export default Main;
