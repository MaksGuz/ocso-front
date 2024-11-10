import deleteProduct from "@/actions/products/delete";
import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";
<<<<<<< HEAD
=======

>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
export default function DeleteProduct({ productId }: { productId: string }) {
  const deleteProductById = deleteProduct.bind(null, productId);
  return (
    <form className="flex w-full" action={deleteProductById}>
      <Button type="submit" color="danger">
        <LuTrash size="20" />
      </Button>
    </form>
  );
}