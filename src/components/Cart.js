import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sepettenCıkar } from "../actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((total, item) => (total += item.price), 0);
  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{totalPrice.toFixed(2)}</h3>

      {cart.map((book) => (
        <div key={book.id} className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378;{book.price}</p>

            <button onClick={() => dispatch(sepettenCıkar(book.id))}>
              Sepetten Çıkar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
