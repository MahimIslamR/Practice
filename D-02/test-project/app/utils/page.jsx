
export async function getProductsData() {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
}