import Link from "next/link";
import { getProfileData } from "../Database/Data";



export default async function About() {
  const users = await getProfileData();
  return (
    <div >
      {users.map((user, index)=>{
        const isEven = index % 2 ===0;
        return(
          <div key={user.id} className="hero bg-base-200 min-h-screen">
        <div className={`hero-content flex-col ${isEven ? 'lg:flex-row : lg   ' : 'flex-row-reverse'}`}>
          <img
            src={user.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{user.title}</h1>
            <p className="py-6">{user.description}</p>
            <div className={`flex flex-row  ${isEven? "justify-start": "justify-start flex-row-reverse  "}`}>
              <button className="btn btn-primary ">{user.price}</button>
              <Link href={`/productdetails/${user.id}`}><button className="btn bg-cyan-500 border-gray-600 mr-2 ml-2">View Detalis</button></Link>
            </div>
          </div>
        </div>
      </div>
        );
      })}


      
    </div>
  );
}
