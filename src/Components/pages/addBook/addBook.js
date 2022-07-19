import React from "react";
import NavBarLogged from "../../NavBar/navbarLogged";

const AddBook = () => {
  return (
    <>
      <NavBarLogged />
      <div className="form-content">
        <form className="form" noValidate>
          <div className="form-inputs">
            <label className="form-labels">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Intoduce book title"
            />
          </div>
          <div className="form-inputs">
            <label className="form-labels">Author</label>
            <input
              id="Author"
              type="text"
              name="Author"
              placeholder="Intoduce book Author"
            />
          </div>
          <div className="form-inputs">
            <label className="form-labels">Description</label>
            <input
              id="Description"
              type="text"
              name="Description"
              placeholder="Intoduce book Description"
            />
          </div>
          <button className="form-input-btn" type="submit">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};
export default AddBook;
