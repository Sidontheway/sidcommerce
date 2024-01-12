import Image from 'next/image'
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export function Carousels() {
    var items = [
        {
            name: "Banner 1",
            description: "Get up to 10% discount",
            image: "/Assests/banner1.jpg"
        },
        {
            name: "Banner 2",
            description: "Get Up to 20% discount",
            image: "/Assests/banner2.jpg"

        }
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
        <Paper className='relative'>
            <Image src={props.item.image} width="1024" height="350" className='w-full 	' />
            <div className='absolute top-1/4 left-1/3 text-4xl font-extrabold max-sm:text-lg flex flex-col gap-5 max-lg:gap-0 justify-end filter backdrop-blur-lg'>
                <h2>{props.item.name}</h2>
                <p className='text-red-600'>{props.item.description}</p>

                <Button className=" bg-green-600 text-white text-lg rounded-md w-1/2 max-lg:text-sm hover:bg-green-700">
                    Shop Now
                </Button>
            </div>
        </Paper>
    )
}