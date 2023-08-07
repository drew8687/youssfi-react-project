import { faCheckCircle, faCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { checkProducts, deleteProduct, getProducts } from '../app/app';
import { json } from 'react-router-dom';




function Products() {
    /*const [products,setProducts]=useState([
        {id:1,name:"computer",price:4300,checked:false},
        {id:2,name:"pc",price:4200,checked:true},
        {id:3,name:"smart phone",price:5300,checked:false},
        {id:4,name:"screen",price:5000,checked:true}



    ])*/
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        handelGetProducts();

    },[]);
    const handelGetProducts=()=>{
        getProducts()
        .then(resp=>{
            setProducts(resp.data);
         

        });
    };


    const supprimerPrd=(product)=>{
        deleteProduct(product).then((resp) => {
            const newProducts=products.filter((p)=>p.id!==product.id);
            setProducts(newProducts);
            alert(JSON.stringify(product));


        });
};
    const changer_etat=(product)=>{
        checkProducts(product)
        .then((resp) => {
            const newProducts =products.map((p) => {
                if(p.id === product.id){
                    p.checked=!p.checked;
                }
                return p;
            });
                setProducts(newProducts);

           
    });
   
};
   return (
    <div className="p-1 m-1">
    <div className='"row'><div className='col-md-6'>
    <div lassName='card'>
    <div className='"card-body'></div>
    <table className="table">
    <thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Price</th>
    <th>Checked</th>
    </tr>
    </thead>
    <tbody>{
        products.map(product=>(
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
            <button onClick={()=>changer_etat(product)} className='btn btn-outline-success'>
            <FontAwesomeIcon    
            icon={product.checked ? faCheckCircle:faCircle}
            ></FontAwesomeIcon>
            </button></td>
            <td>
            <button onClick={()=>supprimerPrd(product)} className='btn btn-outline-danger'>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
            </tr>

        ))
    }</tbody>
    </table>
    </div>
    </div>
    </div>
    </div>
    )
}

export default Products