"use server";
<<<<<<< HEAD
=======

>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
<<<<<<< HEAD
export default async function deleteProduct(
  productId: string,
  formData: FormData
=======
export default async function deleteProduct(productId: string, formData: FormData
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
) {
  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE",
    headers: {
      ...authHeaders(),
<<<<<<< HEAD
    },
  });
  if (response.status === 200) {
    revalidateTag("dashboard:products");
=======
      'content-type' : 'application/json'
    },
  })
  if (response.status === 200) { revalidateTag("dashboard:products");
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
    redirect("/dashboard/products");
  }
}