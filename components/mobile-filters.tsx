"use client";
import { Category, Color, Size } from "@/types";
import { useState } from "react";
import Button from "@/components/ui/newButton";
import { X, Filter as FilterIcon } from "lucide-react";
import {Dialog} from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "@/components/filter";

interface MobileFilterProps {
    sizes: Size[],
    colors: Color[];
    categories?: Category[]
}

const MobileFilter: React.FC<MobileFilterProps> = ({
    sizes,
    colors,
    categories
}) => {
    const [ open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    return (
       <>
        <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
           
            <FilterIcon size={20}/>
            Filters
        </Button>
        <Dialog open={open} as="div" className="relative z-40" onClose={onClose}>
            <div className="fixed inset-0 bg-black bg-opacity-25"/>
               
               <div className="fixed inset-0 z-50 flex">
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                    <div className="flex items-center justify-end px-4">
                        <IconButton icon={<X size={15} onClick={onClose}/>}/>
                    </div>
                    <div className="p-4">

                        {categories && 
                        (
                             <Filter 
                             valueKey="categoryId"
                             name="Categories"
                             data={categories}
                         />
                        )
                        }
                    <Filter 
                    valueKey="sizeId"
                    name="Sizes"
                    data={sizes}
                />
                <Filter 
                    valueKey="colorId"
                    name="Colors"
                    data={colors}
                />
                    </div>
                </Dialog.Panel>
               </div>
               
               </Dialog>
       </>
    )
}

export default MobileFilter;