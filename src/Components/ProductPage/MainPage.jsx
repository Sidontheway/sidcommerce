"use client"

import React from 'react'
import FilterSection from './FilterSection';
import ProductSection from './ProductSection';

const Filters = () => {
  return (
    <main className='max-w-6xl mx-auto mt-10 px-4'>
      <div className="py-8 border-b border-slate-200 space-y-4">
        <h1 className="text-5xl font-semibold">Collection</h1>
        <p className="text-slate-700 max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perferendis. Assumenda optio non consequuntur repellat, laborum dolorum ipsam. Voluptatum, vero eveniet in temporibus reprehenderit accusamus. Cum cupiditate tempora quae mollitia!
        </p>
      </div>

      <div className='grid grid-cols-8 py-8 gap-10'>
        <FilterSection />
        <div className='col-span-6'>
          <ProductSection/>
        </div>
      </div>

    </main>
    )
}

export default Filters;