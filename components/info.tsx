"use client"

import { Product } from '@/types'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Currency from '@/components/ui/currency'
import { Check, Minus, Plus, ShoppingCart } from 'lucide-react'
import * as z from 'zod'
import toast from 'react-hot-toast'
import useCart from '@/hooks/use-cart'
import { useRouter } from 'next-nprogress-bar'

interface InfoProps {
    data: Product
}
const quantitySchema  = z.object({
    quantity: z.number().int({message: 'Decimals are not allowed'}).min(1,{message: 'Quantity must atleast be 1'}).max(100, {message: "Quantity can't be more than 100"})
})

const Info: React.FC<InfoProps> = ({data}) => {

    const [quantity, setQuantity] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const cart = useCart();
    const item = cart.get(data.id);
    const router = useRouter();
    
    const  handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setQuantity(0);
        } else {
            setQuantity(parseInt(e.target.value))
        }
    };
    const  increaseQuantity = ()  => {
       if (quantity < 100) {
        setQuantity((prev) => prev + 1);
       }
    };
    const decreaseQuantity = () => {
       if (quantity >= 1) {
        setQuantity((prev) => prev - 1);
       }
    } 

    const addToCart = () => {
        
        const res = quantitySchema.safeParse({quantity: quantity});
        let order = {...data, orderQuantity: quantity};
        if (!res.success) {
            toast.error(res.error.issues[0].message);
        } else if(quantity > data.stock) {
            toast.error("Sorry, our stock is limited")
        } else {
            cart.addItem(order)
        }
    
    
    }

    useEffect(() => {
        setIsMounted(true);
    }, [])
  
    if (!isMounted) {
        return null;
    }
  return (
    <div>
        
        <div className='mt-3 flex items-between justify-between'>
        <h1 className='text-2xl font-bold text-black-2 capitalize'>
            {data.name}
        </h1>
            <p className='text-xl font-semibold text-orange flex items-center justify-center'>
                <Currency value={data.price} className='text-xl'/>
            </p>
        </div>
        <hr  className='my-4 text-light-grey'/>

        <p className='flex gap-2 text-grey mb-4'>
            <span className='font-bold flex gap-2'>✅ <span className='text-black font-bold'>{data.stock}</span></span>
            items in stock and available 
        </p>
       <div className='flex  gap-8'>
       <div className='flex  flex-col gap-x-4 mb-4'>
            <h3 className='font-medium text-black'>Color</h3>
         
            <p className='rounded-full w-10 mt-2 h-10 border border-light-grey' style={{backgroundColor: data.color.value}}></p>
          
        </div>
        <div className='flex flex-col gap-x-4'>
            <h3 className='font-medium text-black'>Size</h3>
           
            <p className='flex items-center mt-2 justify-center rounded-lg bg-white text-orange w-10 h-10 ring ring-offset-1 ring-orange'><span className='text-center block mx-auto'>{data.size.value}</span></p>
            
        </div>
       </div>
       
       {!item ?
       
            (
                
                  <div>
                    <h3 className='font-medium text-black'>Quantity</h3>
                        
                    <div className='flex gap-5 mt-5 items-start justify-start'>
                        <div className="flex gap-x-6 text-white items-center justify-center border border-transparent bg-orange h-10 w-10 p-4 hover:border-orange hover:text-orange hover:bg-transparent">
                                
                            <button onClick={decreaseQuantity}><Minus size={20}/></button>
                        </div>
                        <input 
                                type="text"
                                inputMode='numeric'
                                value={quantity} 
                                pattern='\d*' 
                                min={1} max={1} 
                                className='text-black text-center border border-orange h-10 w-10 outline-none'
                                onChange={handleQuantity} />
                        <div className="flex gap-x-6 items-center text-white justify-center border border-transparent bg-orange h-10 w-10 p-4 4 hover:border-orange hover:text-orange hover:bg-transparent">
                                
                            <button onClick={increaseQuantity}>
                            <Plus size={20}/>
                            </button>
                            </div>
                    </div>

                    <div className='mt-10 flex items-center gap-x-3'>
                        <button onClick={addToCart} className='flex items-center justify-center gap-x-2 rounded-full w-full px-6 py-3 border border-transparent text-white bg-orange hover:bg-transparent hover:text-orange hover:border-orange'>
                        <ShoppingCart className='-mt-1'/>
                            Add To Cart   
                        </button>
                     </div>
                </div> 
                
            ) : (
                <div>
                <h3 className='font-medium text-black'>Quantity</h3>
                    
                <div className='flex gap-5 mt-5 items-start justify-start'>
                    <div className="flex gap-x-6 text-white items-center justify-center border border-transparent bg-orange h-10 w-10 p-4 hover:border-orange hover:text-orange hover:bg-transparent">
                            
                        <button onClick={() => cart.decreaseQuantity(data.id)}><Minus size={20}/></button>
                    </div>
                    <span className='text-black flex items-center justify-center border border-orange h-10 w-10'>
                        {item.orderQuantity}
                    </span>
                    <div className="flex gap-x-6 items-center text-white justify-center border border-transparent bg-orange h-10 w-10 p-4 4 hover:border-orange hover:text-orange hover:bg-transparent">
                            
                        <button onClick={() => cart.increaseQuantity(data.id)}>
                        <Plus size={20}/>
                        </button>
                        </div>
                </div>

                <div className='mt-10 flex items-center gap-x-3'>
                    <button onClick={() => router.push("/cart")} className='flex items-center justify-center gap-x-2 rounded-full w-full px-6 py-3 border border-transparent text-white bg-orange hover:bg-transparent hover:text-orange hover:border-orange'>
                    <ShoppingCart className='-mt-1'/>
                       Go To Cart
                    </button>
                 </div>
            </div> 

            )
    
    }
  
        <div className='mt-4'>
            <h1 className='text-black font-medium'>Description</h1>
            <p className='mt-3 text-grey'>{data.description}</p>
        </div>

    </div>
  )
}

export default Info