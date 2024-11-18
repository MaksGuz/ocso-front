"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async function updateUser(
  userId: string,
  formData: FormData
) {
  try {
    let data: any = {};
    data.userEmail = formData.get("userEmail") || undefined;
    data.userPassword = formData.get("userPassword") || undefined;

    const response = await fetch(`${API_URL}/auth/${userId}`, {
      method: "PATCH",
      headers: {
        ...authHeaders(),
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update user: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("User updated successfully:", result);

    return result;
  } catch (error) {
    console.error("Error updating user:", error);
  }
}
