import Container from '@/components/ui/container'
import { HomePageCarousel } from '@/components/ui/homepage-carousel';
import React from 'react'
import getBillboards from "@/actions/get-billboards";
import Services from '@/components/services';
import getProducts from '@/actions/get-products';
import ProductLists from '@/components/ui/product-lists';
import { Header } from '@/components/header';
export const revalidate = 0;

const HomePage = async () => {
  const billboards = await getBillboards();
  const products = await getProducts({isFeatured: true})
  const newProducts = products.slice(0, 4);
  const lastFourItems = products.slice(-4);
 
  return (
   <Container>
    <div className='space-y-10 pb-10'>
      <>
      <Header/>
      </>
     
    <>
    <h3 
       className='relative font-extrabold mb-12 text-3xl text-center after:bg-orange after:w-[100px] after:h-2 after:rounded-md after:absolute after:-bottom-0 after:left-[50%] after:translate-x-[-50%] leading-[60px]'
      >What We Offer
    </h3>
        
      <Services/>
    </>
      <div className='flex flex-col gap-y-8 px-4 lg:px-8'>
        <ProductLists title='Featured Products' data={lastFourItems}/>
      </div>

      <div className='flex flex-col gap-y-8 px-4 lg:px-8'>
        <ProductLists title='Our Latest Products' data={newProducts}/>
      </div>
   
    </div>
     
   
   
   </Container>
  )
}

export default HomePage