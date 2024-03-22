"use client";

import { Category, Color, Size } from "@/types";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";
import React, { useState } from "react";
import Button  from "@/components/ui/newButton";
import { cn } from "@/lib/utils";
import { useRouter } from "next-nprogress-bar";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterProps {
    data: (Size | Color | Category)[];
    name: string;
    valueKey: string;
}
const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const selectedValue = searchParams.get(valueKey);

    const [showFilters, setShowFilters] = useState(true);
    const onClick = (id: string) => {
        const current = queryString.parse(searchParams.toString());
            const query = {
                ...current,
                [valueKey]: id
            };

            if (current[valueKey] === id) {
                query[valueKey] = null;
            }

            const url = queryString.stringifyUrl({
                url: window.location.href,
                query
            }, {skipNull: true})
            router.push(url);
    }
    return (
        <div className={`mb-8 `}>
            <h3 className="flex gap-2 text-lg  font-semibold">
                {name}
                {
                    showFilters ?
                    <ChevronUp size={20} className="text-orange mt-1" onClick={() => setShowFilters((prev) => !prev)}/>
                            :
                    <ChevronDown size={20} className="text-orange mt-1" onClick={() => setShowFilters((prev) => !prev)}/>
                }
            </h3>
            <hr className="my-4 border-light-grey"/>
            <div className={`flex-wrap gap-2 ${showFilters ? 'flex' : 'hidden'}`}>
                {data.map((filter)=> (
                    <div key={filter.id} className="flex items-center">
                        <Button
                         className={cn("rounded-lg text-black capitalize border border-light-grey bg-transparent px-4 py-2 hover:opacity-50",selectedValue === filter.id && "text-white bg-orange border-none hover:text-white hover:bg-orange hover:opacity-50")} 
                         onClick={() => onClick(filter.id)}>
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter;