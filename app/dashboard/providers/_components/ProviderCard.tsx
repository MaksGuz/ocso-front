import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard({ provider }: { provider: Provider }) {
    return (
        <Card className="pr-10 justify-left"> 
            <CardHeader>{provider.providerName}</CardHeader>
            <Divider />
            <CardBody>
                <p>
                    Correo electronico:</p>
                <b>{provider.providerEmail}</b>
                <p>
                    Numero de telefono:
                </p>
                <b>{provider.providerPhoneNumber}</b>
                {
                    provider.products ? (
                        <p>
                           Tiene <b>{provider.products.length}</b> productos
                        </p>
                    ) : <p> No tiene productos </p>
        }
            </CardBody>
        </Card>
    );
}