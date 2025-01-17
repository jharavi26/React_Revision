import { useEffect, useState } from "react";

import "./App.css";

import List from "./pages/list";
import Cart from "./pages/cart";
import Nav from "./pages/nav";
import useNetwork from "./network/useNetwork";

function App() {
  const [showCart, setShowCart] = useState(false);

  const network = useNetwork();

  if (!network.isLoading && !network.data) {
    network.fetch();
  }

  function handleCartClick() {
    setShowCart(!showCart);
  }

  return (
    <>
      <div>
        <Nav onCartClick={handleCartClick} />
        <Cart />
        <List onCartClick={handleCartClick} />
      </div>
    </>
  );
}

export default App;
