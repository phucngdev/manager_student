import React, { useState } from "react";

const Form = ({ handleClose, students }) => {
  //   const [students, setStudents] = useState(() => {
  //     const studentLocal = JSON.parse(localStorage.getItem("student")) || [];
  //     return studentLocal;
  //   });
  const [student, setStudent] = useState({
    msv: "",
    name: "",
    age: "",
    gender: "Nam",
    birth: "",
    born: "Hà Nội",
    address: "",
  });
  console.log(student);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...students, student];
    localStorage.setItem("student", JSON.stringify(newList));
    // setStudents(newList);
    handleClose();
  };
  return (
    <>
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample" onSubmit={handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="msv"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="age"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select
                    onChange={handleChange}
                    className="form-control"
                    name="gender"
                  >
                    <option>Nam</option>
                    <option>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    className="form-control"
                    name="birth"
                    type="date"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select
                    onChange={handleChange}
                    className="form-control"
                    name="born"
                  >
                    <option>Hà Nội</option>
                    <option>TP. Hồ Chí Minh</option>
                    <option>Đà Nẵng</option>
                    <option>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea
                    onChange={handleChange}
                    className="form-control"
                    name="address"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-danger me-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
