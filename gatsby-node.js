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
    if(page.path.match(/^\/category/)){
        createPage({
            path: "/category/",
            matchPath: "/category/:slug",
            component: path.resolve("src/pages/category/index.js")
        })
    }
}
