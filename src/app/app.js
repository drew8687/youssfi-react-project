import axios from "axios";
import Products from "../component/Products";

export const productsApi =axios.create({
    baseUrl:"http:/localhost:9000"
});
export const getProducts=()=>{
    return productsApi.get("/Products"); 
}
export const deletProduct=()=>{
    return productsApi.delete("/Products/${product.id}"); 
}
export const getProduct=(id)=>{ 
    return productsApi.get('/Products/${id}');

}
export const saveProducts=(product)=>{
    return productsApi.post('/Products',product);
}
export const checkProducts=(product)=>{
    return productsApi.patch('/Products',{checked:!product.checked});

}
export const updateProdcuts=(product)=>{
    return productsApi.put('/Products',product);
}