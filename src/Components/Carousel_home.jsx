import Image from 'next/image'
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Box, LinearProgress } from '@mui/material'
import { SfRating } from '@storefront-ui/react';

import CountdownTimer from "@/Components/Counter"

const targetDate = '2024-05-25T23:45:59'; // Replace this with your target date

export function Carousel_home() {
    var items = [
        {
            image: "/Assests/TopCategeory/cat-1.png",
            categeory: 'Fruits',
            name: "Ocean Spray 100% Juice, 10 Ounce",
            new_price: 5.35,
            old_price: 10.7,
            rating: <SfRating value={4} max={5} />,
            total_items: 90,
            sold: 20
        },
        {
            image: "/Assests/TopCategeory/cat-4.jpg.png",
            categeory: 'Ocean Foods',
            name: "Fresh Ginger Root / Adrak – 1lb",
            new_price: 7.90,
            old_price: 19.3,
            rating: <SfRating value={4} max={5} />,
            total_items: 70,
            sold: 60
        },

    ]

    return (
        <Carousel >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <div className='flex justify-around max-lg:flex-col pb-5'>
            <Box>
                <Image src={props.item.image} width={500} height={500} className = "  object-fill"/>
            </Box>

            <Box className=" w-1/3 max-xl:w-auto ">
                <div className=' text-left flex gap-3 flex-col'>
                    <p>{props.item.categeory}</p>
                    <h1 className='text-xl font-bold'>{props.item.name}</h1>
                    <h1 className='text-xl font-bold text-red-600'>${props.item.new_price} <span className='text-xl font-normal text-gray-400 line-through ml-20'>${props.item.old_price}</span></h1>
                    <p>{props.item.rating} 1 review</p>
                    <p>Status: <span className='text-green-600'>In stock</span></p>
                </div>

                <hr className="h-3 text-gray-400 w-[80%] mt-3" />

                <div>
                    <CountdownTimer targetDate={targetDate} />
                    <LinearProgress 
                        variant="buffer" 
                        value={((Number(props.item.sold) / Number(props.item.total_items)) * 100)} 
                        sx={{ height: "20px", mr: 2,mt:3 }} color='secondary' />
                    <p><span className=' font-bold text-purple-700 mr-3 mt-3'>{props.item.sold}/{props.item.total_items}</span>Sold</p>
                    
                </div>
            </Box>
        </div>
    )
}