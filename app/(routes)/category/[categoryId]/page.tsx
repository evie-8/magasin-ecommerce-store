import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import BillboardCard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Filter  from "@/components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilter from "@/components/mobile-filters";
import ProductLists from "@/components/ui/product-lists";
import { FilterIcon } from "lucide-react";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({params, searchParams}) => {
    const products = await getProducts({categoryId: params.categoryId, colorId: searchParams.colorId, sizeId: searchParams.sizeId })
    const sizes = await getSizes();
    const colors = await getColors();
    const category =  await getCategory(params.categoryId);

    return (
    <div className="bg-white">
        <Container>
        
                <BillboardCard data={category.billboard}/>
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                       <MobileFilter sizes={sizes} colors={colors }/>
                        <div className="hidden lg:block">
                            <div className="flex items-start justify-start gap-4 text-lg font-semibold mb-5 mt-7">
                                <FilterIcon size={20} className="text-orange"/>
                                <span className="">Filters</span>
                            </div>
                            <Filter name="Sizes" valueKey="sizeId" data={sizes}/>
                            <Filter name="Colors" valueKey="colorId" data={colors}/>
                      
                        </div>
                        <ProductLists data={products} title={category.name} pagination={true}/>
                    </div>
                </div>
        </Container>
    </div>
  )
}

export default CategoryPage