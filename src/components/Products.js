import React from "react";
import { Link } from "react-router-dom";
import { sepeteEkle } from "../actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Products = (props) => {
  const booklist = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  const handleClick = (book) => {
    dispatch(sepeteEkle(book));
  };

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {booklist.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar:{book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={() => handleClick(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
