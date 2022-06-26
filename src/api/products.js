import axios from "./Api";

export const getProducts = () => {
    return  axios.get('/products').then(res => res.data)
}



export const setProducts = async () => {
    let data = await getProducts();
    return  data;
}