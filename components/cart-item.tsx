import { CartOrder } from '@/types'
import Image from 'next/image'
import React from 'react'
import IconButton from './ui/icon-button'
import { Minus, Plus, X } from 'lucide-react'
import Currency from './ui/currency'
import useCart from '@/hooks/use-cart'

interface CartItemProps {
    item: CartOrder
}

const CartItem: React.FC<CartItemProps> = ({item}) => {
    
    const cart = useCart();
  return (
   <li className='flex py-6 border-b border-light-grey'>
    <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
        <Image src={item.images[0].url} fill alt='cart image' className='object-cover object-center'/>
    </div>
    <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div className='absolute z-10 right-0 top-0'>
            <IconButton onClick={() => cart.removeItem(item.id)} icon={<X size={15}/>}/>
        </div>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
        <div className='flex flex-col'>
                <p className='text-lg font-semibold text-black'> {item.name}</p>
                <p className='text-grey gap-2'>Color: {item.color.name}</p>
                <p className='text-grey gap-2'>Size: {item.size.name}</p>
                <p className='text-grey flex gap-2'>Price: <Currency value={item.price}/></p>
                </div>
            <div className='flex justify-between gap-6'>
            
                <div>
                    <h3 className='font-medium text-black mt-3 lg:m-0 lg:text-center'>Quantity</h3>
                        
                   <div className='flex flex-col gap-4'>
                   <div className='flex gap-5 mt-5 items-start justify-start lg:items-center lg:justify-center'>
                                <div className="flex gap-x-6 text-white items-center justify-center border border-transparent bg-orange h-10 w-10 p-4 hover:border-orange hover:text-orange hover:bg-transparent">
                                        
                                    <button onClick={() =>{ cart.decreaseQuantity(item.id); console.log('clicked')}}><Minus size={20}/></button>
                                </div>
                                <span className='text-black flex items-center justify-center border border-orange h-10 w-10 '>
                                    {item.orderQuantity}
                                </span>
                                <div className="flex gap-x-6 items-center text-white justify-center border border-transparent bg-orange h-10 w-10 p-4 4 hover:border-orange hover:text-orange hover:bg-transparent">
                                        
                                    <button onClick={() => cart.increaseQuantity(item.id)}>
                                    <Plus size={20}/>
                                    </button>
                                </div>

                               
                    </div>
                    <p className='font-semibold text-grey flex gap-4 whitespace-nowrap'>Sub Total: <span className='font-bold text-black'><Currency value={item.orderQuantity * Number(item.price)}/></span></p>
                   </div>
                 </div>
            </div>
           
        </div>
    </div>

   </li>
  )
}

export default CartItem