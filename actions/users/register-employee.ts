"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async function registerEmployee(
  employeeId: string,
  formData: FormData
) {
  try {
    let data: any = {};
    data.userEmail = formData.get("userEmail");
    data.userPassword = formData.get("userPassword");
    data.userRoles = "Employee";

    const response = await fetch(
      `${API_URL}/auth/register/${employeeId}?role=employee`,
      {
        method: "POST",
        headers: {
          ...authHeaders(),
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to register employee: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Employee registered successfully:", result);

    return result;
  } catch (error) {
    console.error("Error registering employee:", error);
    throw error; 
  }
}
