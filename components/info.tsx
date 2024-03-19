import { Product } from '@/types'
import React from 'react'
import Currency from '@/components/ui/currency'
import { ShoppingCart } from 'lucide-react'

interface InfoProps {
    data: Product
}

const Info: React.FC<InfoProps> = ({data}) => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-black-2'>
            {data.name}
        </h1>
        <div className='mt-3 flex items-end justify-between'>
            <p className='text-xl text-orange'>
                <Currency value={data.price}/>
            </p>
        </div>
        <hr  className='my-4 text-light-grey'/>
        <div className='flex items-center gap-x-4'>
            <h3 className='font-semibold text-black'>Size:</h3>
            <div className='flex flex-row gap-5'>
               <p className=''> {data.size.name}</p>
               <p> {data.size.value}</p>
            
            </div>
        </div>
        <div className='flex items-center gap-x-4'>
            <h3 className='font-semibold text-black'>Color:</h3>
            <div className='flex flex-row gap-4'>
                <span>{data.color.name} </span>
                <p className='rounded-full w-5 h-5 border border-light-grey' style={{backgroundColor: data.color.value}}></p>
            </div>
        </div>
        <div className='mt-10 flex items-center gap-x-3'>
            <button className='flex items-center gap-x-2 rounded-full px-6 py-3 text-white bg-orange hover:bg-orange/50'>
                Add To Cart
                <ShoppingCart className='-mt-1'/>
            </button>
        </div>
    </div>
  )
}

export default Info