import React, { useState } from "react";
import { saveProducts } from "../app/app";

function NewProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);
  const handelSaveProduct = (event) => {
    event.preventDefault();
    let product={name,price:price,checked:checked};
    saveProducts(product).then(resp=>{
      alert(JSON.stringify(resp.data));



    });
  };

  return (
    <div className=" row p-1">
      <div className="col-md-6">
        <div className="card">
          <div className='"card-body'></div>
          <div>
          <form onSubmit={handelSaveProduct}>
          <div class="form-group">
            <label>Name</label>
            <input onChange={(e)=>setName(e.target.value)}
            value={name} 
            type="text" class="form-control"   placeholder="Enter Name"/>
            <small  class="form-text text-muted">nom est obligatoire</small>
          </div>
          <div class="form-group">
            <label >Price</label>
            <input onChange={(e)=>setPrice(e.target.value)} type="text" class="form-control" 
            value={price}  placeholder="Enter Price"/>
          </div>
          <div class="form-check">
          <input onChange={(e)=>setChecked(e.target.value)}
          value={checked}  type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
