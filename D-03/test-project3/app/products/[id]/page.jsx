import { getProductdata } from "@/app/components/database";

export default async function productDetails({ params }) {
    const { id } = await params;
    const products = await getProductdata();
    const singlepd = products.find((pd) => pd.id.toString() === id.toString());

    if (!singlepd) {
        return (
            <div>
                <h1>not found</h1>
            </div>
        );
    }

    return (
        <div className="flex item-center justify-center min-h-screen">
            <div className="card bg-base-100 w-96 shadow-sm ">
                <figure>
                    <img
                        src={singlepd.image}
                        alt={singlepd.catagory}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {singlepd.title}
                        <div className="badge badge-secondary">{singlepd.price}</div>
                    </h2>
                    <p>{singlepd.description}</p>
                    <div className="card-actions justify-end">
                        <div className="">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                        <div className="">
                            <button className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}