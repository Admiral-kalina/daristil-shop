import * as React from "react"

//components
import ProductsList from "../component/ProductsList/ProductsList";
import VideoScreen from "../component/VideoScreen/VideoScreen";

//helpers
import {useContextState} from "../Context/store";
import {getProductsList} from "../helpers/productsList";

//styles
import './index.scss'
import "normalize.css"




const IndexPage = () => {
    const {state} = useContextState();
    const products = getProductsList(state);

    return (
        <>
            <VideoScreen/>
            <ProductsList products={products}/>

        </>
    )
}

export default IndexPage
