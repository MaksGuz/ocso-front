import { API_URL } from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import Link from "next/link";

export default async function LocationCard({
     store,
    }: {
     store: string | string[] | undefined;
    }) {
    if (!store) return null;
    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:locations", `dashboard:locations:${store}`]
        }
    });
    const data: Location = await response.json()
    return (
        <Card>
            <CardHeader>
                <b className="w-full text-2x1">{data.locationName}</b>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col w-full items-center">
                <p className="w-full"> 
                    Manager :{" "}
                     <Link href={{ pathname: `/dashboard/managers/${data.manager?.managerId}` }}>
                     <b>{data.manager?.managerFullName}</b>
                     </Link>
                    </p>
                    <p className="w-full">
                            Direccion: <b>{data.locationAddress}</b>
                     </p>
            </CardBody>
        </Card>
    )
}