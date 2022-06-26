import * as React from "react"
import Catalog from "../component/Catalog/Catalog";
import './index.scss'
import "normalize.css"
import StateProvider from "../Context/store";


const IndexPage = () => {

    return (
        <StateProvider>
            <Catalog/>
        </StateProvider>
    )
}

export default IndexPage
