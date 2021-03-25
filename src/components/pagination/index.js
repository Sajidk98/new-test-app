import React from "react";
import "./style.css";

const Pagination = (props) => {
  const { total, current, handlePagination } = props;
  var totalButton = Array.from(Array(total).keys());

  return (
    <div className="container">
      {totalButton.map((item) => {
        return (
          <button
            key={item}
            onClick={handlePagination}
            value={item + 1}
            className={current == item + 1 ? "active" : ""}
          >
            {item + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
