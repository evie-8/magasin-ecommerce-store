import Container from '@/components/ui/container'
import { HomePageCarousel } from '@/components/ui/homepage-carousel';
import React from 'react'
import getBillboards from "@/actions/get-billboards";
import getProducts from '@/actions/get-products';
import ProductLists from '@/components/ui/product-lists';

export const revalidate = 0;

const ProductsPage = async () => {
  const billboards = await getBillboards();
  const products = await getProducts({isFeatured: true})
  
  return (
   <Container>
    <div className='space-y-10 pb-10'>
      <>
      <HomePageCarousel billboards={billboards}/>
      </>
    
      <div className='flex flex-col gap-y-8 px-4 lg:px-8'>
        <ProductLists title='Our Products' data={products}/>
      </div>

     
    </div>
     
   
   
   </Container>
  )
}

export default ProductsPage