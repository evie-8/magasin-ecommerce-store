"use client";

import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import Currency from '@/components/ui/currency'
import Button from './newButton'
import { Expand, Heart, ShoppingCart } from 'lucide-react'
import IconButton from '@/components/ui/icon-button'
import { useRouter } from 'next-nprogress-bar'

interface ProductCardProps {
    data: Product
}
const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    const router = useRouter()
    const onClick  = () => {
       router.push(`/product/${data.id}`);
    }
  return (
    <div onClick={onClick} className='group cursor-pointer relative bg-white p-3 border border-light-grey rounded-xl shadow-sm transition hover:shadow-lg space-y-4'>
        
     <div className='aspect-square rounded-xl bg-grey/50 relative'>
     <Image src={data?.images?.[0].url} fill alt='product image' className='rounded-md aspect-square object-cover'/> 
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 top-[43%]">
             <div className="flex gap-x-6 justify-center">
                    <IconButton icon={<Heart size={20} className="text-grey"/>}/>
                    <IconButton  icon={<Expand size={20} className="text-grey"/>}/>
            </div>
        </div>

     </div>


     <div className=''>
         <h4 className='font-semibold text-lg text-black'>{data?.name}</h4>
               
             <span className='text-sm text-grey'>{data?.category.name}</span>
          
            <Currency value={data?.price} className='font-semibold text-orange'/>
     </div>
     <Button className="absolute p-2 rounded-[50%] bg-[#fadab5] font-[500] text-orange bottom-5 right-3 cursor-pointer" >
            <ShoppingCart className="text-3xl text-center"/>
    </Button>
    </div>
  )
}

export default ProductCard