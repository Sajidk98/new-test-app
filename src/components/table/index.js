import React from "react";
import "./style.css";

const Table = ({ data, column, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>URL</th>
          <th>Thum Url</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.length !== 0 &&
          data.map((item) => {
            return (
              <tr key = {item.id}>
                <td>{item.title}</td>
                <td>{item.url}</td>
                <td>{item.thumbnailUrl}</td>
                <td>
                  <button onClick={handleEdit} value={item.id}>
                    Edit
                  </button>
                  <button onClick={handleDelete} value={item.id}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
