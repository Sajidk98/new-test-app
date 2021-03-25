import React, { useState } from "react";
import { useDispatch } from "react-redux";
import types from "../actions/constant";
import Modal from "../components/Modal";

const AddForm = ({ setAdding }) => {
  const dispatch = useDispatch();

  const [body, setBody] = useState("");
  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: types.ADD_PHOTO_REQUEST, payload: body });
    setAdding(false);
  };

  return (
    <Modal>
      <form onSubmit={handleEditSubmit}>
        <h4>Add a row</h4>
        <div style={{ textAlign: "center" }}>
          <label htmlFor="title"></label>
          <input
            onChange={(e) => {
              setBody(e.target.value);
            }}
            id="title"
            type="text"
            value={body}
            placeholder="Please Enter title"
            required
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button>ADD</button>
          <button
            onClick={() => {
              setAdding(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddForm;
