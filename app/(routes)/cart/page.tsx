"use client"

import CartItem from "@/components/cart-item";
import Summary from "@/components/summary";
import Container from "@/components/ui/container"
import NoResults from "@/components/ui/no-results";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react"

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();
   
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }
  return (
    <div className="bg-white">
        <Container>
            <div className="px-4 py-10 sm:px-10 lg:px-8">
                <h1 className="capitalize text-3xl font-bold text-black">Shopping Cart</h1>
                {cart.items.length === 0 ?  <NoResults message="No items added to cart"/> :
                 <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12 ">
                 <div className="lg:col-span-7">
                 
                     <ul>
                         {cart.items.map((item) => (
                             <CartItem key={item.id} item={item}/>
                         ))}
                     </ul>
                 </div>
                 <Summary/>

             </div>
                
                }
               
            </div>
        </Container>
    </div>
  )
}

export default CartPage