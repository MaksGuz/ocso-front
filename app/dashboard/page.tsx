import EmployeesLocation from "./@locations/_components/EmployeesLocation";

export default function DashboardPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined }}) {
    const store = Array.isArray(searchParams.store) ? searchParams.store[0] : searchParams.store;

    if (!store) {
        return <div>Tienda no seleccionada</div>;
    }

    return (
        <div className="h-full w-4/12 bg-red-100">
            <EmployeesLocation store={store} />
        </div>
    );
}
