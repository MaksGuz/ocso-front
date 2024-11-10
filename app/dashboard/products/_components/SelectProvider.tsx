<<<<<<< HEAD
'use client';
import { Provider } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

export default function SelectProvider({ providers, defaultProvider, }: {
  providers: Provider[]; defaultProvider?: string;}) {
  return (
    <Select
      defaultSelectedKeys={defaultProvider ? [defaultProvider] : undefined} label="Proveedor" name="provider">
      {providers.map((provider) => {
        return (
            <SelectItem 
            key={provider.providerId} 
            value={provider.providerId}
            textValue={provider.providerName} >
                {provider.providerName}
=======
"use client";

import { Provider } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

export default function SelectProvider({
  providers,
  defaultProvider,
}: {
  providers: Provider[];
  defaultProvider?: string;
}) {
  return (
    <Select
      defaultSelectedKeys={defaultProvider ? [defaultProvider] : undefined}
      label="Proveedor"
      name="Provider"
    >
      {providers.map((provider) => {
        return (
          <SelectItem key={provider.providerId}>
            {provider.providerName}
>>>>>>> cd678fff4b54b253c22d9ef8494b3089a41eb792
          </SelectItem>
        );
      })}
    </Select>
  );
}