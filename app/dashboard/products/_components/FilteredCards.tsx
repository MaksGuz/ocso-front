"use client";
<<<<<<< HEAD
import { Product, Provider} from "@/entities";
=======
import { Product, Provider } from "@/entities";
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
<<<<<<< HEAD
export default function FilteredCards({ products, providers }: { products: Product[], providers: Provider[] }) {
=======

export default function FilteredCards({
  products,
  providers,
}: {
  products: Product[];
  providers: Provider[];
}) {
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
  const [filtered, setFiltered] = useState<string>("");
  const [provider, setProvider] = useState<string>();
  const [show, setShow] = useState(false);
  const [productsList, setProductsList] = useState<Product[]>(products);
  useEffect(() => {
    const filteredProducts = products.filter((product) => {
<<<<<<< HEAD
      if (product.productName.toLowerCase().includes(filtered.toLowerCase()) 
        && product.provider.providerId === provider 
    ) {
=======
      if (
        product.productName.toLowerCase().includes(filtered.toLowerCase()) &&
        provider
          ? product.provider.providerId === provider
          : true
      ) {
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
        return true;
      } else return false;
    });
    setProductsList(filteredProducts);
    setShow(true);
<<<<<<< HEAD
  }, [filtered, provider]);
  return (
    <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-8 border-r-orange-400 border-r-2 px-10">
      <Select label="Proveedor" onChange={(e) => {
        setProvider(e.target.value);
      }}>
        {providers.map((provider)=> ( 
          <SelectItem key={provider.providerId}>
            {provider.providerName}
        </SelectItem>
      ))}
=======
  }, [filtered, provider, products]);
  return (
    <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-4 border-r-orange-400 border-r-2 px-10">
      <Select
        label="Proveedor"
        onChange={(e) => {
          setProvider(e.target.value);
        }}
      >
        {providers.map((providers) => (
          <SelectItem key={providers.providerId}>
            {providers.providerName}
          </SelectItem>
        ))}
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
      </Select>
      <Input
        onChange={(e) => {
          setFiltered(e.target.value);
        }}
        label="Nombre del producto"
      />
<<<<<<< HEAD
      {show && productsList.map((product) => {
        return (
          <Link
          className="hover:scale-110 transition-transform"
            key={product.productId}
            href={{ pathname: `dashboard/products/${product.productId}` }}
          >
            <ProductCard product={product} />
          </Link>
        );
      })}
=======
      {show &&
        productsList.map((product) => {
          return (
            <Link
              className="hover:scale-110 transition-transform"
              key={product.productId}
              href={{ pathname: `dashboard/products/${product.productId}` }}
            >
              <ProductCard product={product} />
            </Link>
          );
        })}
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
    </div>
  );
}