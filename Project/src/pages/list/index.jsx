import "./style.css";
import AddToCart from "../../assets/add.png";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/movie-list";

function List({ onCartClick }) {
  const data = [{ id: 1, title: "1", amount: 100 }];

  const cart = useSelector(function (state) {
    return state?.cart?.cart;
  });

  const movies = useSelector(function (state) {
    return state.movies.movies;
  });

  const isLoading = useSelector(function (state) {
    return state.movies.isLoading;
  });

  const dispatch = useDispatch();

  // console.log(cart);

  function handleAddToCart(movie) {
    return () => {
      dispatch(addToCart(movie));
    };
  }

  if (isLoading) {
    return <h1>Loading Data...</h1>;
  }
  //console.log(movies);
  return (
    <div className="movie-list">
      {!!movies &&
        movies?.map((movie) => {
          const { title, discount, thumbnail_width, thumbnail } = movie;

          return (
            <div className="movie-card" key={thumbnail}>
              <img width="140px" height="170px" src={thumbnail} />
              <span>{title}</span>
              <div className="cart-btn">
                <button className="cart-srap" onClick={handleAddToCart(movie)}>
                  <span> Add to Cart</span>{" "}
                  <img src={AddToCart} height="22px" />
                </button>
              </div>
              {!!discount && <span>"This is free"</span>}
              <span>INR {thumbnail_width}</span>
            </div>
          );
        })}
    </div>
  );
}

export default List;
