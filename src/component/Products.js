import {
  faCheckCircle,
  faCircle,
  faEdit,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  checkProducts,
  deleteProduct,
  getProducts,
  
} from "../app/app";
import { useNavigate } from "react-router-dom";

function Products() {
  /*const [products,setProducts]=useState([
        {id:1,name:"computer",price:4300,checked:false},
        {id:2,name:"pc",price:4200,checked:true},
        {id:3,name:"smart phone",price:5300,checked:false},
        {id:4,name:"screen",price:5000,checked:true}



    ])*/
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [state, setState] = useState({
    products: [],
    currentPage: 1,
    pagesize: 4,
    keyword: "",
    totalPages: 0,
  });
  useEffect(() => {
    handelGetProducts(state.keyword, state.currentPage, state.pagesize);
  }, []);
  const handelGetProducts = (keyword, page, size) => {
    getProducts(keyword, page, size).then((resp) => {
      const totalElements = resp.headers["x-total-count"];
      let totalPages = Math.floor(totalElements / size);
      if (totalElements % size !== 0) ++totalPages;
      setState({
        ...state,
        products: resp.data,
        keyword: keyword,
        currentPage: page,
        pagesize: size,
        totalPages: totalPages,
      });
    });
  };
  const HandelgetPage = (page) => {
    handelGetProducts(state.keyword, page, state.pagesize);
  };

  const supprimerPrd = (product) => {
    deleteProduct(product).then((resp) => {
      const newProducts = state.products.filter((p) => p.id !== product.id);
      setState(newProducts);
    });
  };
  const changer_etat = (product) => {
    checkProducts(product).then((resp) => {
      const newProducts = state.products.map((p) => {
        if (p.id === product.id) {
          p.checked = !p.checked;
        }
        return p;
      });
      setState(newProducts);
    });
  };
  const handelSearch = (event) => {
    event.preventDefault();
    //setState({ ...state, keyword: query });
    handelGetProducts(query,1,state.pagesize);
  };

  return (
    <div className="p-1 m-1">
      <div className="row">
        <div className="col-md-6">
          <div className="card m-1">
            <div className='"card-body'>
              <form onSubmit={handelSearch}>
                <div className=" row g-2">
                  <div className="col-auto">
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="col-auto">
                    <button  className="btn-btn-success">
                      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div lassName="card">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Checked</th>
                </tr>
              </thead>
              <tbody>
                {state.products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <button
                        onClick={() => changer_etat(product)}
                        className="btn btn-success"
                      >
                        <FontAwesomeIcon
                          icon={product.checked ? faCheckCircle : faCircle}
                        ></FontAwesomeIcon>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => supprimerPrd(product)}
                        className="btn btn-outline-danger"
                      >
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                      </button>
                    </td>
                    <td>
                    <button onClick={ () => navigate(`editProducts/${product.id}`)} className="btn btn-outline-success">
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="nav nav-pills">
              {new Array(state.totalPages).fill(0).map((v, index) => (
                <li>
                  <button
                    onClick={() => HandelgetPage(index + 1)}
                    className={
                      index + 1 === state.currentPage
                        ? "btn btn-info ms-1"
                        : "btn btn-outline-info ms-1"
                    }
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
