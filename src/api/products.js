import axios from "./Api";

export const getProducts = () =>{
   return  axios.get('/products').then(res => res.data)
}

