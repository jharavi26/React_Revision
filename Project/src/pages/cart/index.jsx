import "./style.css";
import Delete from "../../assets/delete.png";
import Checkout from "../../assets/checkout.png";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { removeFromCart } from "../../store/actions/movie-list";
import { getCartSelector } from "../../store/reducers/cart";
import { store } from "../../store";
function Cart() {
  // const cart = [{ id: 1, title: "1", amount: 100 }];

  const basket = useSelector(getCartSelector);
  useSelector((state) => [{ s: [] }], shallowEqual);
  const total = 30000;

  console.log("store", store.getState());

  const dispatch = useDispatch();

  function handleRemove(id) {
    return () => {
      dispatch(removeFromCart(id));
    };
  }

  return (
    <div className="card list">
      {Object.keys(basket).map((key) => {
        const cart = basket[key];
        console.log({ cart });
        const product = cart.value;

        const { title, thumbnail, count, thumbnail_width: amount } = product;

        return (
          <div className="movi-cart" key={thumbnail}>
            <div className="row-x">
              <img src={thumbnail} height="100px" width="60px" />
              <span className="movie-name">{title}</span>
            </div>

            <div className="calu">
              x {cart.count} = {cart.count * amount}
            </div>

            <button onClick={handleRemove(key)} className="btn">
              Remove <img src={Delete} height="22px" />
            </button>
          </div>
        );
      })}

      <h4>Total: {total}</h4>

      <button className="btn">
        Checkout <img height="22px" src={Checkout} />
      </button>
    </div>
  );
}

export default Cart;
