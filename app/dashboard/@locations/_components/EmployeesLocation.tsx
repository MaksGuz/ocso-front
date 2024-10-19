import axios from "axios";
import { Employee } from "@/entities";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";

export default async function EmployeesLocation({ store }: { store: string }) {
    const token = cookies().get(TOKEN_NAME)?.value;
    const { data } = await axios.get<Employee[]>(`${API_URL}/employees/location/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!data || data.length === 0) {
        return <div>No employees found for this location</div>;
    }

    return data.map((employee) => {
       const fullName = employee.employeeName + " " +  employee.employeeLastName
         return <div>{fullName}</div>
    });
}
