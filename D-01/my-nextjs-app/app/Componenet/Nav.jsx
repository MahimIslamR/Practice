import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/service">Services</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold">daisyUI</Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li>
            <details className="dropdown">
              <summary className="cursor-pointer list-none">More</summary>
              <ul className="p-2 bg-base-100 w-40 z-50 rounded-box shadow absolute mt-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <button className="btn "><ShoppingCart className="h-6 w-6 text-blue-500" /></button>
      </div>
    </div>
  );
}