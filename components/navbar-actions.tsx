"use client";

import  Button  from "@/components/ui/newButton"; 
//import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const NavbarActions= ()=> {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    },[]);

    //const cart = useCart();
    const router = useRouter();
   

    if (!isMounted) {
        return null;
    }
    return (
        <div className="ml-auto flex items-center gap-x-4">

            <Button  className="flex items-center rounded-full bg-[#ffa45c] px-4 py-2">
                <ShoppingBag
                size={20}
                color="#fff"
                />
                <span className="ml-2 text-sm text-white font-medium">
                  0
                </span>
            </Button>
        </div>
    )
};

export default NavbarActions;