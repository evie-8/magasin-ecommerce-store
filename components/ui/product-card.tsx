"use client";

import { Product } from '@/types'
import Image from 'next/image'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import Currency from '@/components/ui/currency'
import Button from './newButton'
import { Expand, Minus, Plus, ShoppingCart } from 'lucide-react'
import IconButton from '@/components/ui/icon-button'
import { useRouter } from 'next-nprogress-bar'
import usePreviewProduct from '@/hooks/use-product-preview';
import useCart from '@/hooks/use-cart';

interface ProductCardProps {
    data: Product
}
const ProductCard: React.FC<ProductCardProps> = ({data}) => {
  const previewModal = usePreviewProduct();
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const item = cart.get(data.id)
 
    const router = useRouter();
    const onClick  = () => {
       router.push(`/product/${data.id}`);
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
      previewModal.onOpen(data)
      
    }

    const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
      const newData = {
        ...data,
        orderQuantity: 1
      }
      cart.addItem(newData)

    }

    const increaseQuantity: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
      
      cart.increaseQuantity(data.id);

    }
    const decreaseQuantity: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
     
      cart.decreaseQuantity(data.id)

    }



    useEffect(() => {
      setIsMounted(true);
  }, [])

  if (!isMounted) {
      return null;
  }
  return (
    <div onClick={onClick} className='group cursor-pointer relative bg-white p-3 border border-light-grey rounded-3xl shadow-sm transition hover:shadow-lg space-y-4 min-w-[180px]'>
        
     <div className='aspect-square  bg-transparent relative'>
     <Image src={data?.images?.[0].url} fill alt='product image' className='rounded-3xl aspect-square object-cover'/> 
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 top-[43%]">
             <div className="flex gap-x-6 justify-center">
                  
                    <IconButton onClick={onPreview}  icon={<Expand size={20} className="text-grey"/>}/>
            </div>
        </div>

     </div>


     <div className=''>
         <h4 className='font-semibold  text-black'>{data?.name}</h4>
               
             <span className='text-sm text-grey'>{data?.category.name}</span>
          
            <Currency value={data?.price} className='font-semibold text-orange text-sm'/>
     </div>
     {
      !item ?
     
     <Button  onClick={addToCart}
     className="absolute p-2 rounded-[50%] bg-[#fadab5] font-[500] text-orange bottom-5 right-3 cursor-pointer" >
            <ShoppingCart className="text-3xl text-center"/>
    </Button> :
    
    (
      <div className='flex gap-2 mt-5 items-start justify-start lg:items-center lg:justify-center absolute p-2 bottom-2 right-0'>
      <div className="flex gap-x-6 rounded-full text-white items-center justify-center border border-transparent bg-orange h-4 w-4 p-3 hover:border-orange hover:text-orange hover:bg-transparent">
              
          <button onClick={decreaseQuantity}><Minus size={15}/></button>
      </div>
      <span className='text-black rounded-full flex items-center justify-center text-sm  border text-center border-orange h-4 w-4 p-3'>
          {item.orderQuantity}
      </span>
      <div className="flex gap-x-6 rounded-full items-center text-white justify-center border border-transparent bg-orange h-4 w-4 p-3  hover:border-orange hover:text-orange hover:bg-transparent">
              
          <button onClick={increaseQuantity}>
          <Plus size={15}/>
          </button>
      </div>

  </div>
    )
    
    } 

    </div>
  )
}

export default ProductCard