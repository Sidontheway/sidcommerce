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
import ProductItem from "@/Components/ProductPage/ProductItem"
import Testimonial from '@/Components/Testimonial';
import Carousel from 'react-material-ui-carousel';
import NewsSection from '@/Components/NewsSection';

import { products } from '@/Components/product';

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


const details_testimonials = [
    {
        name: "Kyne West",
        position: "Boss at TocoToco",
        feedbacks: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
        image: "/Assests/Avatar/avatar.png"
    }, {
        name: "Sidoa Hamilson",
        position: "Manager at Taj",
        feedbacks: "Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.",
        image: "/Assests/Avatar/avatar.png"
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
                <div>Hellow World</div>
            </div>

            {/* NEW ARRIVALS SECTION */}
             <div>
                <h1 className='text-xl font-semibold m-5'>New Arrivals</h1>
                <hr className='h-1 w-[95%] text-gray-500 mr-5 ml-5 ' />
                <div className='grid grid-cols-4  max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 m-10 justify-items-center gap-8'>
                    {
                        products.map((item) => {
                            return <ProductItem details={item} />
                        })
                    }
                </div>
            </div> 

            <h1 className='text-xl font-bold m-10 mb-5'>What Our Clients Say</h1>
            <hr className='h-1 w-[95%] text-gray-500 mr-5 ml-5 ' />
            <Carousel className='m-10 max-lg:m-0'>
                {
                    details_testimonials.map((box) => {
                        return <Testimonial details={box} />
                    })
                }
            </Carousel>

            <h1 className='text-xl font-bold m-10 mb-5'>News</h1>
            <hr className='h-1 w-[95%] text-gray-500 mr-5 ml-5 ' />
            <NewsSection />

        </div>
    )
 }

export default Home;