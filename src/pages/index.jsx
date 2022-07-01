import * as React from "react"
//components
import ProductsList from "../component/ProductsList/ProductsList";
//styles
import './index.scss'
import "normalize.css"
import VideoScreen from "../component/VideoScreen/VideoScreen";

const IndexPage = () => {

    return (
        <>
            <VideoScreen/>
            <ProductsList/>

        </>
    )
}

export default IndexPage
