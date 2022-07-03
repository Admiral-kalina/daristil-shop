import React, {useState} from 'react';
import {useContextState} from "../../Context/store";

//helpers
import {filterBySlug} from "../../helpers/filterData";
import ProductsList from "../../component/ProductsList/ProductsList";

const Category = ({slug}) => {
    const [filteredData, setFilteredData] = useState([]);
    const {state} = useContextState();



    return (
        <div>
            <ProductsList products={filterBySlug(state.products.serverData, slug)}/>
        </div>
    );
};

export default Category;