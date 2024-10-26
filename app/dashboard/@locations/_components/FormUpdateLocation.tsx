import { Button, Input } from "@nextui-org/react"
import { API_URL} from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Manager, Location } from "@/entities";
import { updateLocation } from "@/actions/locations/update";
export  default async function FormNewLocation({store}: {store : string | string[] | undefined}) {
    if (!store || store == undefined || typeof store == "object") return null;
    const updateWithStoreID = updateLocation.bind(null, store);
    const responseManager = await fetch(`${API_URL}/managers`,{
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:managers"]
        }
    })
    const dataManagers: Manager[] = await responseManager.json()
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:locations"]
        }
    })
    
    const dataLocations: Location[] = await responseLocations.json()
    let foundLocation = dataLocations.find((location)=> location.locationId == +store)
    let foundManager = dataManagers.find((manager)=> manager.managerId == foundLocation?.manager?.managerId)
    return (
        <form action={updateWithStoreID} className="bg-orange-400 px-10 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3x1 text-white text-center"> Crear tienda </h1>
            <Input required={true} defaultValue={foundLocation?.locationName} label="Nombre" placeholder="Ocso Jurikiya" name="locationName" />
            <Input required={true} defaultValue={foundLocation?.locationAddress} label="Direccion" placeholder="Av de la Luz" name="locationAddress" />
            <Input required={true} defaultValue={foundLocation?.locationLatLng[0].toString()} label="Latitud"  placeholder="-120" name="locationLat" />
            <Input required={true} defaultValue={foundLocation?.locationLatLng[1].toString()} label="Longitud" placeholder="20" name="locationLng" />
            <SelectManager defaultManager={foundManager?.managerId} managers={dataManagers} locations={dataLocations} />
            <Button type="submit" color="primary"> Actualizar </Button>
        </form>
    );
}