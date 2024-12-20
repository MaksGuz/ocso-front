import createProduct from "@/actions/products/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";

export const ProductsPage = async () => {
  const responseProviders = await fetch(`${API_URL}/providers`, {
    headers: {
      ...authHeaders(),
    },
  });
  const providers = await responseProviders.json();
  return (
    <form className="px-10 justify-center pt-10" action={createProduct}>
      <div className="flex flex-col p-10 rounded-md gap-6 bg-orange-600">
        <h1 className="text-2xl text-white font-bold">Crear producto</h1>
        <Input label="Nombre" name="productName" />
<<<<<<< HEAD
        <Input label="Precio" endContent={<LuDollarSign size="20" />} name="price"/>
        <Input label="Num. de Sellos" name="countSeal" />
        <SelectProvider providers={providers} />
        <Button color="primary" type="submit"> Crear producto </Button>
      </div>
    </form>
  );
};

export default ProductsPage;
=======
        <Input
          label="Precio"
          endContent={<LuDollarSign size="20" />}
          name="price"
        />
        <Input label="Num. de Sellos" name="countSeal" />
        <SelectProvider providers={providers} />
        <Button color="primary" type="submit">
          Crear producto
        </Button>
      </div>
    </form>
  );
};
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
