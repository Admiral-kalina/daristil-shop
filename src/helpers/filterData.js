export const filterBySlug = (data, slug) => {
    return data.filter(el => {
        console.log(el.category?.NameEN?.toLowerCase(), slug)
       return el.category?.NameEN?.toLowerCase() === slug
    })
}