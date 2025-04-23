export const getProducts = async (category) => {

    if (!category) {
        const request = await fetch('https://dummyjson.com/products?limit=12');

        const data = await request.json();

        return data.products;
    }else{
        const request = await fetch(`https://dummyjson.com/products/category/${category}?limit=12`);

        const data = await request.json();
    
        return data.products;
    }    
}

export const getProduct = async (id) => {

    const request = await fetch(`https://dummyjson.com/products/${id}`);

    const data = await request.json();

    return data;
}
