import axios from "axios";
export const productsApi =axios.create({
    baseURL:"http://localhost:9000"
});
export const getProducts=()=>{
    return productsApi.get("/products") ;  
}
export const deleteProduct=(product)=>{
    return productsApi.delete("/products/"+product.id); 
}
export const getProduct=(id)=>{ 
    return productsApi.get("/products/"+id);

}
export const saveProducts=(product)=>{
    return productsApi.post(`/products`,product);
}
export const checkProducts=(product)=>{
    return productsApi.patch(`/products/${product.id}`,{checked:!product.checked});

}
export const updateProducts=(product)=>{
    return productsApi.put(`/products`,product);
}
