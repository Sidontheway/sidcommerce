import { SfButton, SfIconShoppingCart, SfRating } from '@storefront-ui/react';
import React from 'react'
import QuantitySelector from '../ProductPage/QuantitySelector';

const Details = (props) => {
    const prd_description_list = props.product.desc.split(".").slice(0, -1);
    return (
        <div className = "m-5">
            <h3 id="promoModalTitle" className="font-bold typography-headline-4 md:typography-headline-3  text-xl">
                {props.product.title}
            </h3>
            <SfRating size="xs" value={3} max={5} className='m-3 mb-5' />(1 Review)

            <hr className='w-full h-0.5 border-collapse bg-gray-200 m-4 ml-0 mr-0' />

            <h1 className='text-xl font-extrabold'>${props.product.price}</h1>
            <hr className='w-full h-0.5 border-collapse bg-gray-200 m-4 ml-0 mr-0' />

            <ul className=' list-disc '>
                {
                    prd_description_list.map((description) => {
                        return <li className='mb-2'>{description}.</li>
                    })
                }
            </ul>

            <hr className='w-full h-0.5 border-collapse bg-gray-200 m-4 ml-0 mr-0' />

            <div className='flex justify-around items-center'>
                <QuantitySelector />
                <SfButton size="lg" slotPrefix={<SfIconShoppingCart size="lg" />}>
                    Add to cart
                </SfButton>
            </div>
        </div>
    )
}

export default Details;