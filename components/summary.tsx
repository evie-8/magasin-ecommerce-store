"use client"
import useCart from '@/hooks/use-cart'
import React, { useEffect, useTransition } from 'react'
import Currency from './ui/currency'
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { BeatLoader} from 'react-spinners';

const Summary = () => {
    const searchParams = useSearchParams();
    const [loading, setLoading] = useTransition()
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);
   
    useEffect(() => {
        if (searchParams.get("success")) {
          toast.success("Payment Completed");
          removeAll();
        }
  
        if (searchParams.get("cancelled")) {
          toast.error("Something went wrong");
        }
  
      }, [searchParams, removeAll])
   
    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price) * Number(item.orderQuantity)
    }, 0);

    const onCheckOut = () => {
        setLoading(async() => {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {cartItems: items.map((item) => item)});
        window.location = response.data.url
        })
    }
  return (
    <div className='mt-16 rounded-lg bg-light-grey/50 px-4 py-6 smLp-6 lg:col-span-5 lg:mt-0 lg:p-8'>
        <h2 className='text-lg font-medium text-black-2'>Order Summary</h2>
        <div className='flex items-center justify-between border-t border-light-grey pt-4'>
            <div className='text-base font-medium text-grey'>
                Order Total
            </div>
            <Currency value={totalPrice}/>
        </div>
        <button  onClick={onCheckOut} disabled={loading} className='text-white bg-orange py-3 border border-transparent rounded-full hover:opacity-60 w-full mt-6'>{!loading ? 'CheckOut' : <BeatLoader/>}</button>
        <div>

        </div>
    </div>
  )
}
 
export default Summary