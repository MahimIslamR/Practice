


export async function getProfileData() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}