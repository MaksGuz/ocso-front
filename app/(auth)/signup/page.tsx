import { Button, Input, Link } from "@nextui-org/react"

export default function SignupPage(){
    return (
       <div className="bg-white-10 px-10 py-2 rounded-md">
        <p className="text-2x1 my-4 text-center">Registrarse</p>
        <div className="flex flex-col gap-2 my-4 items-center">
            <Input label= "Email" type="email" isRequired={true} size="sm" />
            <Input label= "Contraseña" type="password" isRequired={true} size="sm" />
            <Input label= "Repetir contraseña" type="password" isRequired={true} size="sm" />
        </div>
            <div className="flex flex-col items-center gap-2">

         <Button color="primary">Registrarse</Button>
         <p>
            ¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link>
         </p>
         </div>
       </div>
    );
}