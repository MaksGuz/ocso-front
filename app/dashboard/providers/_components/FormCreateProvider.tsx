import createProvider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateProvider(){
    return (
        <form action={createProvider} className="flex flex-col gap-2 flex-grow-0">
        <h1 className="text-2x1 text-white text-center"> Crear Proveedor </h1>
        <Input label="Nombre" placeholder="Pepsi" name="providerName" />
        <Input label="Email" placeholder="business@pepsi.com" name="providerEmail" />
        <Input label="Numero" placeholder="442XXXXX" name="providerPhoneNumber" />
            <Button color="primary" type="submit"> Crear Proveedor </Button>
        </form>
    )
}