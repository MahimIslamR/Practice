import Image from "next/image";
import { getProductsdata } from "./components/daatabase/data";
import Link from "next/link";

export default async function Home() {
  const products = await getProductsdata();

  return (
    <div>
      {products.map((product, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={product.id} className="hero bg-base-200 min-h-screen">
            <div className={`hero-content flex-col ${isEven? "lg:flex-row": "lg:flex-row-reverse"}`}>
              <img
                src={product.image}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{product.title}</h1>
                <p className="py-6">{product.description}</p>
                <button className="btn btn-primary">${product.price}</button>
                <Link href={`product/${product.id}`}><button className="btn btn-primary ml-4">View Details</button></Link>
              </div>
            </div>
          </div>
        );
      }
      )}
    </div>
  );
}
