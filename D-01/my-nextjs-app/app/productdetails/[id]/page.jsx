import { getProfileData } from "@/app/Database/Data";

export default async function Product({ params }) {
    const { id } = await params;
    const products = await getProfileData();
    const singleproduct = products.find((product) => product.id.toString() === id.toString());

    if (!singleproduct) {
        return (
            <div>
                <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{id} No product is not available right now.</span>
                </div>
            </div>

        );
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={singleproduct.image}
                        alt={singleproduct.catagory} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{singleproduct.title}</h2>
                    <p>{singleproduct.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-cyan-300 text-black text-bold border-purple-500">{singleproduct.price}</button>
                        <button className="btn btn-primary">Buy Now</button>

                    </div>
                </div>
            </div>
        </div>
    );

}