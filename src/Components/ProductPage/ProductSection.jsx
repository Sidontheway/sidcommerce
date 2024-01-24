import { useSearchParams } from 'next/navigation';
import React from 'react'
import { convertStringToQueriesObject } from './FilterSection';

import { products } from '../product';
import ProductItem from './ProductItem';

const isAvailable = (arr1,arr2)=>{
  if(!arr1 || !arr2 ){
    return true;
  }
  return arr1.some((item)=> arr2?.includes(item));
}

const ProductSection = () => {
  const searchParams = useSearchParams();
  const paramsObj = convertStringToQueriesObject(searchParams);

  let filteredProducts = products.filter((product)=>{
    const hasCategories = isAvailable(product.categories,paramsObj?.categories);
    const hasColors = isAvailable(product.colors,paramsObj?.colors);
    const hasSize = isAvailable(product.sizes,paramsObj?.sizes);
    return hasSize && hasColors && hasCategories;
  })

  filteredProducts = filteredProducts.sort((p1,p2)=>{
    switch(paramsObj?.sort?.[0]){
      case "newest":
        return Date.parse(p2.createdAt) - Date.parse(p1.createdAt);
      case "price high - low":
        return p2.price - p1.price;
      case "price low - high":
        return p1.price - p2.price;
      default:
        return 0;
    }
  });

  if (Object.keys(paramsObj).length === 0){
    filteredProducts = products;
  }

  if(filteredProducts.length === 0){
    return <p className='text-center text-slate-700'>No Product Available</p>
  }

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
      {
        filteredProducts.map((products)=>{
          return (
            <div>
              <ProductItem details = {products}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductSection;