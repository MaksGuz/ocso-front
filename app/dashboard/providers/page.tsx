import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { LuPlus } from "react-icons/lu";

const ProviderPage = async () => {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders()
        }
    })
    const providers: Provider[] = await response.json()

    return (
        <div className="flex flex-grow-0 flex-col items-end w-full px-10  pt-10 h-[90vh]">
            <Button className="w-fit" color="primary">
                <LuPlus size="20"/>
            </Button>
            <div className="flex flex-wrap w-full flex-row flex-grow-0 gap-14 px-20 py-20">
                {providers.map((provider: Provider) => (
                    <Link
                        className="hover:scale-110 transition-transform"
                        key={provider.providerId}
                        href={{ pathname: `/dashboard/providers/${provider.providerId}` }}>
                        <ProviderCard provider={provider} key={provider.providerId} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProviderPage;