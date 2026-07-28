import { getProductsdata } from "@/app/components/daatabase/data";


export default async function productDetails({ params }) {
    const { id } = await params;
    const products = await getProductsdata();
    const singlepd = products.find((pd) => pd.id.toString() === id.toString());

    if (!singlepd) {
        return(
            <div>
                <h1>not found</h1>
            </div>
        );
    }
        return (
            <div>
                <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Error! {id} no. product doesn't exist</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div key={singlepd.id}>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            `url(${singlepd.image})`
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{singlepd.title}</h1>
                            <p className="mb-5">{singlepd.description}
                            </p>
                            <button className="btn  bg-yellow-500 text-black border-orange-500">${singlepd.price}</button>
                            <button className="btn btn-primary ml-5">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}