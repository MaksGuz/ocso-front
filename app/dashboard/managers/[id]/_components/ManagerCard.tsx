import { Manager } from "@/entities";
import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import Link from "next/dist/client/link";

export default function ManagerCard({ manager }: { manager: Manager }) {
    return (
        <Card className="mx-20 py-2 text-center">
            <CardHeader>
                <p className="w-full">
                    <b className="text-4x1">{manager.managerFullName}</b>
                </p>
            </CardHeader>
            <Divider>
            </Divider>
            <CardBody className="flex flex-col flex-grow-0 w-full text-center">
                <div className="flex flex-col text-lg">
                    <p className="w-full"> 
                        Email: <b>{manager.managerEmail}</b>
                    </p>
                    <p className="w-full">
                        Phone Number: <b>{manager.managerPhoneNumber}</b>
                    </p>
                    <p className="w-full">
                        Salary: <b>{manager.managerSalary}</b>
                    </p>
                    <p className={manager.location ? "" : "hidden"}>
                        Tienda: <Link href={{
                            pathname:   `/dashboard`,
                            query: {
                                store: manager?.location?.locationId
                            } 
                            }}
                            >
                        <b className="underline">{manager?.location?.locationName}</b></Link>
                    </p>
                </div>
            </CardBody>
        </Card>
    )
}