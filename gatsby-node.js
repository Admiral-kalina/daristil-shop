const path = require("path");

exports.onCreatePage = async ({page, actions}) =>{
    const {createPage} = actions;
    if(page.path.match(/^\/product/)){
        createPage({
            path: "/product/",
            matchPath: "/product/:id",
            component: path.resolve("src/pages/product/index.js")
        })
    }
}
