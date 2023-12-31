import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import MissingRoute from "./scenes/MissingRoute/MissingRoute";
import NavBar from "./scenes/global/NavBar";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="item/:itemId" element={<ItemDetails />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="checkout/success" element={<Confirmation />}></Route>
          <Route path="*" element={<MissingRoute />}></Route>
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
