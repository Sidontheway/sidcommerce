"use client"

import React from 'react'
import { Carousels } from '@/Components/Carousel'

import { Box } from '@mui/material'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import RecyclingIcon from '@mui/icons-material/Recycling';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';

import TopCatgeory from '@/Components/TopCatgeory';

const details = [
    {
        icon:<RocketLaunchOutlinedIcon className='w-12 h-12  text-green-600'/>,
        heading:"Free Delivery",
        subheading:"For all oders over $99"
    },
    {
        icon:<RecyclingIcon className='w-12 h-12  text-green-600'/>,
        heading:"90 Days Return",
        subheading:"If goods have problem"
    },{
        icon:<AccountBalanceWalletOutlinedIcon className='w-12 h-12  text-green-600'/>,
        heading:"Secure Payment",
        subheading:"100% secure payment"
    },{
        icon:<QuizOutlinedIcon className='w-12 h-12  text-green-600'/>,
        heading:"24/7 Support",
        subheading:"Dedicated Support"
    },
]
const Home = () => {
    return (
        <div>
            <Carousels />

            <Box className = "flex justify-around mt-20 m-10 max-sm:flex-col max-lg:items-left gap-10">
                {
                    details.map((item)=>{
                        return (
                            <Box className = "flex justify-between gap-5  max-lg:gap-10 max-lg:justify-start ">
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

            <TopCatgeory/>
        </div>
    )
}

export default Home;