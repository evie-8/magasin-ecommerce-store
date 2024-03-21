import Container from '@/components/ui/container'
import React from 'react'
import Services from '@/components/services';
import getProducts from '@/actions/get-products';
import ProductLists from '@/components/ui/product-lists';
import { Header } from '@/components/header';
export const revalidate = 0;

const HomePage = async () => {
 
  const products = await getProducts({isFeatured: true})
  const newProducts = products.slice(0, 8);
  const lastFourItems = products.slice(-8);
 
  return (
   <Container>
    <div className='space-y-10 pb-10'>
      <>
      <Header/>
      </>
     
    <>
    <h3 
       className='relative font-extrabold mb-12  lg:text-3xl md:text-3xl text-3xl sm:text-2xl text-center after:bg-orange after:w-[100px] after:h-2 after:rounded-md after:absolute after:-bottom-0 after:left-[50%] after:translate-x-[-50%] leading-[60px]'
      >What We Offer
    </h3>
        
      <Services/>
    </>
      <div className='flex flex-col gap-y-8 px-4 lg:px-8'>
        <ProductLists title='Featured Products' slider={true} data={lastFourItems} />
      </div>

      <div className='flex flex-col gap-y-8 px-4 lg:px-8'>
        <ProductLists title='Our Latest Products' slider={true} data={newProducts} />
      </div>
   
    </div>
     
   
   
   </Container>
  )
}

export default HomePage