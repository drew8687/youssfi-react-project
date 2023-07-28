import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./component/Products";
import NewProducts from "./component/NewProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import { useEffect, useState } from "react";
var Link = require("react-router-dom").Link;

function App() {
  const [currentRoute, setcurrentRoute] = useState();
  useEffect(() => {
    const path = window.location.pathname.toLocaleLowerCase();
    setcurrentRoute(path.slice(1, path.length));
  }, []);
  return (
    <BrowserRouter>
      <nav className="m-1 p-1 border border-info">
        <ul className="nav na-pills">
          <li>
            <Link
              onClick={() => setcurrentRoute("home")}
              className={
                currentRoute == "home"
                  ? "btn btn-info ms-1"
                  : "btn btn-outline-info ms-1"
              }
              to={"/home"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setcurrentRoute("Products")}
              className={
                currentRoute == "Products"
                  ? "btn btn-info ms-1"
                  : "btn btn-outline-info ms-1"
              }
              to={"/products"}
            >
              المسجلين
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setcurrentRoute("NewProducts")}
              className={
                currentRoute == "NewProducts"
                  ? "btn btn-info ms-1"
                  : "btn btn-outline-info ms-1"
              }
              to={"/newProducts"}
            >
            NewProducts
            </Link>
          </li>
          
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/newProducts" element={<NewProducts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
