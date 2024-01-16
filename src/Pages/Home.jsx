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
        </div>
    )
}

export default Home;