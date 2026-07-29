import { getProductsData } from "@/app/utils/page"


export default async function ProductDetails({ params }) {
    const { id } = await params;
    const pds = await getProductsData();
    const pd = pds.find((pd) => pd.id.toString() === id.toString())


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={pd.image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{pd.title}</h2>
                    <p>{pd.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-cyan-200">{pd.price}</button>
                        <button  className="btn btn-primary bg-cyan-200">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
