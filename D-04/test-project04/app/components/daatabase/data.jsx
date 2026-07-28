

export async function getProductsdata() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}