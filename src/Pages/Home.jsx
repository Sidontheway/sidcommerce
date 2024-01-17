"use client"

import React from 'react'

import { Box } from '@mui/material'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import RecyclingIcon from '@mui/icons-material/Recycling';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';

import TopCatgeory from '@/Components/TopCatgeory';
import Banner from '@/Components/Banner'
import { Carousels } from '@/Components/Carousel'
import { Carousel_home } from '@/Components/Carousel_home'
import ProductItem from "@/Components/ProductItem"

const details = [
    {
        icon: <RocketLaunchOutlinedIcon className='w-12 h-12  text-green-600' />,
        heading: "Free Delivery",
        subheading: "For all oders over $99"
    },
    {
        icon: <RecyclingIcon className='w-12 h-12  text-green-600' />,
        heading: "90 Days Return",
        subheading: "If goods have problem"
    }, {
        icon: <AccountBalanceWalletOutlinedIcon className='w-12 h-12  text-green-600' />,
        heading: "Secure Payment",
        subheading: "100% secure payment"
    }, {
        icon: <QuizOutlinedIcon className='w-12 h-12  text-green-600' />,
        heading: "24/7 Support",
        subheading: "Dedicated Support"
    },
]

const details_item = [
    {
        name:"Locally Grown Strawberry",
        rating:3,
        price:25.34,
        image:"/Assests/ProductItems/item3.jpg"
    },{
        name:"Organic Orange Valecia 1Kg",
        rating:4.5,
        price:5.34,
        image:"/Assests/ProductItems/item2.jpg"
    },{
        name:"MariGold 100% Juice Milk 350ml",
        rating:3.9,
        price:8,
        image:"/Assests/ProductItems/item1.jpg"
    }
    ,{
        name:"Australian Banana , 2kg",
        rating:3.9,
        price:8,
        image:"/Assests/ProductItems/item4.jpeg"
    },{
        name:"Pineapple (Tropical Gold)",
        rating:4.5,
        price:9.7,
        image:"/Assests/ProductItems/item5.jpeg"
    },{
        name:"Locally Grown Strawberry",
        rating:3,
        price:25.34,
        image:"/Assests/ProductItems/item3.jpg"
    },{
        name:"Organic Orange Valecia 1Kg",
        rating:4.5,
        price:5.34,
        image:"/Assests/ProductItems/item2.jpg"
    },{
        name:"MariGold 100% Juice Milk 350ml",
        rating:3.9,
        price:8,
        image:"/Assests/ProductItems/item1.jpg"
    }
    ,{
        name:"Australian Banana , 2kg",
        rating:3.9,
        price:8,
        image:"/Assests/ProductItems/item4.jpeg"
    },{
        name:"Pineapple (Tropical Gold)",
        rating:4.5,
        price:9.7,
        image:"/Assests/ProductItems/item5.jpeg"
    },
]
const Home = () => {
    return (
        <div>
            <Carousels />

            <Box className="grid grid-cols-4 mt-20 m-10 max-sm:grid-cols-1 max-lg:items-left gap-10 max-lg:grid-cols-2">
                {
                    details.map((item) => {
                        return (
                            <Box className="flex  gap-5  max-lg:gap-10 max-lg:justify-start ">
                                {item.icon}
                                <div>
                                    <h1 className='text-lg font-bold'>{item.heading}</h1>
                                    <p>{item.subheading}</p>
                                </div>
                            </Box>
                        )
                    })
                }
            </Box>

            <TopCatgeory />
            <Banner /> 
            
            <div className='flex max-lg:flex-col max-lg:items-center'>
                <div className='w-3/4 cursor-pointer'>

                    <Carousel_home />
                </div>
                <h1>Hellow Workd</h1>
            </div> 

            <h1 className='text-lg font-semibold m-5'>New Arrivals</h1>
            <div className='grid grid-cols-4  max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 m-5 justify-items-center gap-8'>
                {
                    details_item.map((item)=>{
                        return <ProductItem details = {item}/>
                    })
                }
            </div>
        </div>
    )
}

export default Home;