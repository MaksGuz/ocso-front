"use server";
<<<<<<< HEAD
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
export default async function updateProduct(
  productId: string,
  formData: FormData
=======

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export default async function updateProduct( productId: string, formData: FormData
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
) {
  let product: any = {};
  for (const key of formData.keys()) {
    if (!key.includes("$ACTION")) {
      product[key] = formData.get(key);
    }
  }
  product.price = +product.price;
  product.countSeal = +product.countSeal;
  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: "PATCH",
    body: JSON.stringify(product),
    headers: {
      ...authHeaders(),
      "content-type": "application/json",
    },
  });
  if (response.status === 200) {
    revalidateTag("dashboard:products");
<<<<<<< HEAD
    revalidateTag(`dashboard:products:${productId}`);
=======
    revalidateTag(`dashboard:products:${productId}`)
    redirect("/dashboard/managers");
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
  }
}