import React, { useEffect, useState } from "react";

const ListStudent = ({ students, handleDelete }) => {
  const listStudent = students.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.msv}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.gender}</td>
      <td>
        <div className="template-demo">
          <button type="button" className="btn btn-danger btn-icon-text">
            Xem
          </button>
          <button type="button" className="btn btn-warning btn-icon-text">
            Sửa
          </button>
          <button
            type="button"
            className="btn btn-success btn-icon-text"
            onClick={() => handleDelete(item.msv)}
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{listStudent}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListStudent;
