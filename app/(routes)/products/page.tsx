import Container from '@/components/ui/container'
import { HomePageCarousel } from '@/components/ui/homepage-carousel';
import React from 'react'
import getBillboards from "@/actions/get-billboards";
import getProducts from '@/actions/get-products';
import ProductLists from '@/components/ui/product-lists';
import getSizes from '@/actions/get-sizes';
import getColors from '@/actions/get-colors';
import getCategories from '@/actions/get-categories';
import MobileFilter from '@/components/mobile-filters';
import Filter from '@/components/filter';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';
import { FilterIcon } from 'lucide-react';

export const revalidate = 0;
interface ProductsPageProps {
 
  searchParams: {
      colorId: string;
      sizeId: string;
      categoryId: string;
  }
}
const ProductsPage: React.FC<ProductsPageProps> = async ({searchParams}) => {
  const billboards = await getBillboards();
  const products = await getProducts({isFeatured: true, categoryId: searchParams.categoryId, colorId: searchParams.colorId, sizeId: searchParams.sizeId})
  const sizes = await getSizes();
  const colors = await getColors();
  const categories =  await getCategories();
  return (
    <div className='bg-white'>
   <Container>
    <div className='space-y-10 pb-10'>
      <>
      <HomePageCarousel billboards={billboards}/>
      </>
    
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                       <MobileFilter sizes={sizes} colors={colors } categories={categories}/>
                        <div className="hidden lg:block">
                        <div className="flex items-start justify-start gap-4 text-lg font-semibold mb-5 mt-7">
                                <FilterIcon size={20} className="text-orange"/>
                                <span className="">Filters</span>
                            </div>
                         <Filter name="Categories" valueKey="categoryId" data={categories}/>
                            <Filter name="Sizes" valueKey="sizeId" data={sizes}/>
                            <Filter name="Colors" valueKey="colorId" data={colors}/>
                      
                        </div>
                       <ProductLists data={products} title='Our Products' pagination={true}/>
                    </div>
                </div>
     
    </div> 
   
   </Container>
   </div>
  )
}

export default ProductsPage