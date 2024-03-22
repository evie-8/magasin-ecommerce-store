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
        <div className="nav-login-cart">
        
         <Button onClick={() => router.push("/cart")}  className="flex items-center rounded-full bg-orange px-4 py-2 max-md:py-1">
                <ShoppingBag
                size={15}
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