

export async function getProductdata() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}