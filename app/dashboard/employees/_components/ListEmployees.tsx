"use client";

import { Employee, Location } from "@/entities";
import EmployeePhotoCard from "./EmployeePhotoCard";
import EmployeeCard from "./EmployeeCard";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

interface ListEmployeesProps {
  locations: Location[];
  employees: Employee[];
}

export default function ListEmployees({ employees, locations }: ListEmployeesProps) {
  const [filter, setFilter] = useState<string>();

  return (
    <div>
      {locations && locations.length > 0 && (
        <Select
          label="Tiendas"
          defaultSelectedKeys={[]}
          className="w-60 pr-20 py-10"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          {locations.map((location: Location) => (
            <SelectItem 
              key={location.locationId.toString()} 
              value={location.locationId.toString()}
            >
              {location.locationName}
            </SelectItem>
          ))}
        </Select>
      )}
      <div className="flex flex-row gap-2">
        {employees
          .filter((employee: Employee) => {
            if (!filter) return true;
            return employee.location?.locationId.toString() === filter;
          })
          .map((employee: Employee) => {
            if (employee.employeePhoto) {
              return (
                <EmployeePhotoCard
                  key={employee.employeeId}
                  employee={employee}
                />
              );
            }
            return (
              <EmployeeCard 
                key={employee.employeeId} 
                employee={employee} 
              />
            );
          })}
      </div>
    </div>
  );
}