"use client";

import  Button  from "@/components/ui/newButton"; 
import useCart from "@/hooks/use-cart";
//import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";


const NavbarActions= ()=> {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter()
    useEffect(() => {
        setIsMounted(true);
    },[]);

    const cart = useCart();
    

    if (!isMounted) {
        return null;
    }
    return (
        <div className="ml-auto flex items-center gap-x-4">
            
            <Link href="/products" className="whitespace-nowrap bg-orange text-white py-2 px-4  lg:px-6 rounded-full border border-light-grey transition-all duration-200 hover:bg-transparent hover:text-orange hover:border-orange">Products</Link>
    
            <Link href="" className="whitespace-nowrap bg-transparent text-orange py-2  px-4 lg:px-6 rounded-full border border-orange transition-all duration-200 hover:bg-orange hover:text-white hover:border-transparent">Sign In</Link>

            <Button onClick={() => router.push("/cart")}  className="flex items-center rounded-full bg-[#ffa45c] px-4 py-2">
                <ShoppingBag
                size={20}
                color="#fff"
                />
                <span className="ml-2 text-sm text-white font-medium">
                  {cart.items.length}
                </span>
            </Button>
        </div>
    )
};

export default NavbarActions;