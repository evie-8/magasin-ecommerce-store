"use client";

import { Color, Size } from "@/types";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";
import React from "react";
import Button  from "@/components/ui/newButton";
import { cn } from "@/lib/utils";
import { useRouter } from "next-nprogress-bar";

interface FilterProps {
    data: (Size | Color)[];
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
        <div className="mb-8">
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4 border-light-grey"/>
            <div className="flex flex-wrap gap-2">
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