import { Product } from '@/types'
import React from 'react'
import NoResults from './no-results';
import ProductCard from './product-card';

interface ProductProps {
    data: Product[];
    title: string
}
const ProductLists: React.FC<ProductProps> = ({data, title}) => {
  return (
    <div className='space-y-4 '>
       <h3 className=' relative font-extrabold mb-12 text-3xl text-center after:bg-orange after:w-[100px] after:h-2 after:rounded-md after:absolute after:-bottom-0 after:left-[50%] after:translate-x-[-50%] leading-[60px]'>{title}</h3>
        {data.length === 0 && <NoResults message='No products found'/>}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
            data.map((item) => (
                <ProductCard key={item.id} data={item}/>
            ))
        }
        </div>
    </div>
  )
}

export default ProductLists