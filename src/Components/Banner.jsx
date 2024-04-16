import React from 'react'
import Image from "next/image"

const details = [
    {
        image:"/Assests/Banner/b1.png",
        title:"Fresh Summer With  Pineapple Juice",
        discount:"20%"
    },{
        image:"/Assests/Banner/b2.png",
        title:"Raw Fish Seabass With Spices",
        discount:"30%"
    },
]

const Banner = () => {
  return (
    <div className='grid grid-cols-2 justify-between max-sm:grid-cols-1 gap-10 m-10'>
        {
            details.map((item)=>{
                return(
                    <div className='relative'>
                        <Image src = {item.image} height={800} width={600} className='cursor-pointer' alt = "Banner Image"/>
                        <div className=' absolute top-0 left-0 m-5 p-2 max-lg:relative max-lg:bg-slate-100 max-lg:m-0 max-lg:p-5'>
                            <h1 className='text-xl font-bold w-3/4 mb-2'>{item.title}</h1>
                            <p> <span className = "text-red-600 font-bold text-md">{item.discount}</span> OFF </p>
                            <button className = "bg-green-600 text-white font-bold text-md rounded-lg p-2 mt-3 "> Shop Now</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Banner;
