import * as React from "react"
import { Link } from "gatsby";
import './index.scss'
import "normalize.css"
import {useProductsContext} from "../Context/context";
import Catalog from "../component/Catalog/Catalog";



const IndexPage = () => {
        const  {products, setProducts} = useProductsContext()

    console.log(products)


    const test = () => {
        return {
            1: ``
        }
    }
  return (
      <div >
          <Link to={`/Home`}>smotrya kakoy fabric scolco ditails</Link>
          <Catalog/>
      </div>
  )
}

export default IndexPage
