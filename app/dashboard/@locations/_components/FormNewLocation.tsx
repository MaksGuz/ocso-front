import { Button, Input } from "@nextui-org/react"
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";
export  default async function FormNewLocation({store}: {store : string | string[] | undefined}) {
    if (store) return null
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManager = await axios.get(`${API_URL}/managers`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3x1 text-white text-center"> Crear tienda </h1>
            <Input label="Nombre" placeholder="Ocso Jurikiya" name="locationName" />
            <Input label="Direccion" placeholder="Av de la Luz" name="locationAddress" />
            <Input label="Latitud"  placeholder="-120" name="locationLat" />
            <Input label="Longitud" placeholder="20" name="locationLng" />
            <SelectManager managers={responseManager.data} locations={responseLocation.data}/>
            <Button type="submit" color="primary"> Subir </Button>
        </form>
    );
}