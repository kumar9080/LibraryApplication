import React, { useEffect, useState } from "react";
import BookModel from "../../Models/BookModel";
import Loader from "../Utils/Loader";
import SearchBook from "./components/SearchBook";
import Pagination from "../Utils/Pagination";
const SearchBooksPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);
  const [totalAmountOfBooks, setTotalAmountsOfBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  

  useEffect(() => {
    const fetchBooks = async () => {
      const baseURL = "http://localhost:8080/api/books";

      const URL = `${baseURL}?page=${currentPage - 1}&size=${booksPerPage}`;
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Something went wrong !");
      }
      const responseJSON = await response.json();
      const responseData = responseJSON._embedded.books;

      setTotalAmountsOfBooks(responseJSON.page.totalElements);
      setTotalPages(responseJSON.page.totalPages);

      const loadedBooks: BookModel[] = [];

      for (const key in responseData) {
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          author: responseData[key].author,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copiesAvailable,
          category: responseData[key].category,
          img: responseData[key].img,
        });
      }
      setBooks(loadedBooks);
      setIsLoading(false);
    };
    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
    window.scroll(0,0);
  }, [currentPage]);

  if (loading) {
    return <Loader />;
  }

  if (httpError) {
    return (
      <div className="container">
        <p>{httpError}</p>
      </div>
    );
  }
  const indexOfLastBook: number = currentPage * booksPerPage;
  const indexOfFirstBook:number = indexOfLastBook - booksPerPage;
  let lastItem = booksPerPage * currentPage <= totalAmountOfBooks ? booksPerPage * currentPage: totalAmountOfBooks;

  const paginate = (pageNuumber:number) => setCurrentPage(pageNuumber);

  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-5">
            <div className="col-6">
              <div className="d-inline-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-labelledby="Search"
                ></input>
                <button type="button" className="btn btn-outline-success">
                  Search
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  category
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      ALL
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      FRONT END
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      BACK END
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      DEVOPS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      DATA Engineer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h5>Number of results: (totalAmountOfBooks)</h5>
          </div>
          <p>{indexOfFirstBook + 1} to {lastItem} of {totalAmountOfBooks} items</p>
          {books.map((book) => (
            <SearchBook book={book} key={book.id} />
          ))}
          {totalPages > 1 && 
          <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate}/>}
        </div>
      </div>
    </div>
  );
};
export default SearchBooksPage;
