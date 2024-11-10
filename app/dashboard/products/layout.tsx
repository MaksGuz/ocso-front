<<<<<<< HEAD
import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import FilteredCards from "./_components/FilteredCards";
import { ReactNode } from "react";
export const LayoutProducts = async ({children} : {children : ReactNode}) => {
  const responseProducts = await fetch(`${API_URL}/products`, {
=======
import { ReactNode } from "react"
import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";
import FilteredCards from "./_components/FilteredCards";


export const LayoutProducts = async ({children} : {children: ReactNode}) => {
  const responseProducts = await fetch(`${API_URL}/providers`, {
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: ["dashboard:products"],
    },
  });
  const products: Product[] = await responseProducts.json();
<<<<<<< HEAD
  const responseProviders = await fetch(`${API_URL}/providers`, {
=======
  const responseProviders = await fetch(`${API_URL}/products`, {
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
    headers: {
      ...authHeaders(),
    },
    next: {
<<<<<<< HEAD
      tags: ["dashboard:providers"],
=======
      tags: ["dashboard:products"],
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
    },
  });
  const providers = await responseProviders.json();
  return (
    <div className="h-[90vh] w-full flex flex-row">
      <div className="w-3/12">
        <FilteredCards products={products} providers={providers} />
      </div>
      <div className="w-9/12">
        {children}
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default LayoutProducts;
=======
};
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
