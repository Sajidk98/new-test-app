import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type from "../actions/constant";
import Modal from "../components/Modal";
import Pagination from "../components/pagination";
import Table from "../components/table";
import AddForm from "./AddForm";

const Main = () => {
  const [current, setCurrent] = useState(1);
  const [limit, setLimit] = useState(5);
  const [isEditOpen, setEditOpen] = useState(false);
  const [editBody, setEditBody] = useState({});
  const [isDeleting, setDeleting] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isAdding, setAdding] = useState(false);
  const dispatch = useDispatch();
  const column = ["Title", "Url", "Thumb Url", "Action"];

  useEffect(() => {
    dispatch({ type: type.GET_PHOTO_REQUEST, payload: 0 });
  }, []);

  const handlePagination = (e) => {
    const page = e.target.value;
    setCurrent(page);
    const start = (page - 1) * limit;
    dispatch({ type: type.GET_PHOTO_REQUEST, payload: start });
  };

  const handleDelete = () => {
    dispatch({ type: type.DELETE_PHOTO_REQUEST, payload: deleteId });
    setDeleting(false);
  };

  const handleEdit = (e) => {
    setEditBody({ ...editBody, id: e.target.value });
    setEditOpen(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: type.EDIT_PHOTO_REQUEST, payload: editBody });
    setEditOpen(false);
    setEditBody({});
  };

  const { photos } = useSelector((state) => state);

  return (
    <>
      <button
        onClick={() => {
          setAdding(true);
        }}
      >
        Add New Row
      </button>
      <Table
        data={photos.data}
        column={column}
        handleDelete={(e) => {
          setDeleting(true);
          setDeleteId(e.target.value);
        }}
        handleEdit={handleEdit}
      />
      <Pagination
        current={current}
        total={5}
        handlePagination={handlePagination}
      />
      {isEditOpen && (
        <Modal>
          <form onSubmit={handleEditSubmit}>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="title"></label>
              <input
                onChange={(e) => {
                  setEditBody({ ...editBody, title: e.target.value });
                }}
                id="title"
                type="text"
                value={editBody.title}
                placeholder="Please Enter title"
                required
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <button>Edit</button>
              <button
                onClick={() => {
                  setEditOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      )}

      {isDeleting && (
        <Modal>
          <h4>Are you sure?</h4>
          <button onClick={handleDelete}>Yes</button>
          <button
            onClick={() => {
              setDeleting(false);
            }}
          >
            Cancel
          </button>
        </Modal>
      )}
      {isAdding && <AddForm setAdding={setAdding} />}
    </>
  );
};

export default Main;
