import React, {useState} from 'react';

const categoriesInfo = [
    {categories:['NEW'], male:['man'], options:['T-SHIRT','HOODIE', 'PANTS']},
    {categories:['Clothing'], male:['man'], options:['']},
    {categories:['HANDBAGS'], male:['man'], options:['']},
    {categories:['ACCESSORIES'], male:['man'], options:['']},
    {categories:['SHOES'], male:['man'], options:['']},
    {categories:['EXCLUSIVE'], male:['man'], options:['']},
    {categories:['SEASON'], male:['man'], options:['']}
]

const CatalogBanner = () => {
    const [categoriesList, setCategoriesList] = useState([])

    const handleWomanButton = () => {

    }

    const handleManButton = () => {

    }

    return (
        <div>
            <button onClick={handleWomanButton}>Woman</button>
            {categoriesList.map}
            <button onClick={handleManButton}>Man</button>
        </div>
    );
};

export default CatalogBanner;