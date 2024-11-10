"use server";
<<<<<<< HEAD
=======

>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData) {
<<<<<<< HEAD
    try {
        let product: any = {};
        for (const key of formData.keys()) {
            if (!key.includes("$ACTION_ID")) {
                product[key] = formData.get(key);
            }
        }
        
        // Asegurarse de que los campos numéricos sean números
        product.price = Number(product.price);
        product.countSeal = Number(product.countSeal);
        
        // Asegurarse de que provider sea un string
        if (typeof product.provider !== 'string') {
            throw new Error('Provider must be a string');
        }

        const response = await fetch(`${API_URL}/products`, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                ...authHeaders(),
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Error creating product');
        }

        if (response.status === 201) {
            revalidateTag("dashboard:products");
        }

        return data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
=======
  let product: any = {};
  for (const key of formData.keys()) {
    if (!key.includes("$ACTION_ID")) {
      product[key] = formData.get(key);
    }
  }
  product.price = +product.price;
  product.countSeal = +product.countSeal;
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      ...authHeaders(),
      "content-type": "application/json",
    },
  });
  if (response.status === 201) revalidateTag("dashboard:products");
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
}