"use client"

import { Nav_Breadcrumbs } from "@/Components/ProductDescription/Breadcrums";
import Details from "@/Components/ProductDescription/Details";
import GalleryVertical from "@/Components/ProductDescription/ProductGallery";
import { useParams } from 'next/navigation'

import {products} from "@/Components/product"

const Home = () => {
    const params = useParams();
    const productId = parseInt(params.slug[0]);
    const filter_product = products[productId - 1 ];
    return (
        <div>
            <div className=" h-20 bg-gray-50 py-5 px-5 ">
                <Nav_Breadcrumbs />
            </div>
            <div className=" flex justify-center mt-10 pt-5 max-lg:flex-col">
                <GalleryVertical product = {filter_product}/>
                <Details product = {filter_product}/>
            </div>

        </div>
    )
}

export default Home;