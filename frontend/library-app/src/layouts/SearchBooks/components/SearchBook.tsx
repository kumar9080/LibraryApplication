import React from "react";
import BookModel from "../../../Models/BookModel";

const SearchBook: React.FC<{ book: BookModel }> = (props) => {
  return (
    <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-2">
          <div className="d-none d-lg-block">
            {props.book.img ? (
              <img src={props.book.img} width="123" height="196" alt="Book" />
            ) : (
              <img
                src={require("../../../Images/BooksImages/book-luv2code-1000.png")}
                width="123"
                height="196"
                alt="Book"
              />
            )}
          </div>

          <div className="d-lg-none d-flex justify-content-center align-items-center">
          {props.book.img ? (
              <img src={props.book.img} width="123" height="196" alt="Book" />
            ) : (
              <img
                src={require("../../../Images/BooksImages/book-luv2code-1000.png")}
                width="123"
                height="196"
                alt="Book"
              />
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.book.title}</h5>
            <h4>{props.book.author}</h4>
            <p className="card-text">{props.book.description}</p>
          </div>
          <div className="col-md-2 d-flex justify-content-center align-item-centre">
                <a className="btn btn-md main-color text-white" href="#">
                    View Details
                </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBook;
