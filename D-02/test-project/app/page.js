import Link from "next/link";
import { getProductsData, getProfileData } from "./utils/page";
import { Bentham } from "next/font/google";
import AddToCartButton from "./components/addtocartbutton";



export default async function Home() {
  const products = await getProductsData();
  return (
    <div className="">
      {products.map((pd, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={pd.id} className="hero bg-base-200 min-h-screen">
            <div className={`hero-content flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <img
                src={pd.image}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className={`w-full `}>
                <h1 className={`text-5xl font-bold flex item-center gap-3 ${isEven ? "justify-start" : "justify-end"}`}>{pd.title}</h1>
                <p className="py-6">{pd.description}
                </p>

                <div className={`flex items-center gap-3 ${isEven ? "flex-row lg:justify-start" : "flex-row-reverse lg:justify-start"}`}>
                  <button className="btn btn-primary">${pd.price}</button>
                  <button className="btn bg-purple-900 border-blue-200 text-white ml-3"><Link href={`productdetails/${pd.id}`}>View Detalis</Link></button>
                  <AddToCartButton product={pd}></AddToCartButton>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
