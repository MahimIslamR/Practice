import Link from "next/link";
import { getProductdata } from "./components/database";


export default async function Home() {
  const products = await getProductdata();
  return (
    products.map((product, index) => {
      const isEven = index % 2 ===0;  
      return (
        <div  key={product.id} >
          <div  className="hero bg-base-200 min-h-screen">
            <div className={`hero-content flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <img
                src={product.image}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{product.title}</h1>
                <p className="py-6">{product.description}
                </p>
                <button className="btn btn-primary">${product.price}</button>
                <div className="mt-3">
                  <Link href={`/products/${product.id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })

  );
}
