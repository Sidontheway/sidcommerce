import React from 'react'
import Image from "next/image"

const details = [
    {
        name: "Milk & Creams",
        image: "/Assests/TopCategeory/cat-1.png"
    },
    {
        name: "Fruits",
        image: "/Assests/TopCategeory/cat-2.jpg.png"
    }, {
        name: "Vegetables",
        image: "/Assests/TopCategeory/cat-3.jpg.png"
    }, {
        name: "Ocean Foods",
        image: "/Assests/TopCategeory/cat-4.jpg.png"
    }, {
        name: "Butter & Eggs",
        image: "/Assests/TopCategeory/cat-5.jpg.png"
    }, {
        name: "Fresh Meats",
        image: "/Assests/TopCategeory/cat-6.jpg.png"
    },
]

const TopCatgeory = () => {

    function Handle_link(inputString) {
        let processedString = inputString.replace(/\s/g, '').toLowerCase();
        processedString = processedString.replace(/&/g, 'and');
        return processedString;
    }

    return (
        <div className=' m-10'>
            <h1 className='text-xl font-bold '>Top Categories Of The Month</h1>
            <div className='grid grid-flow-row-dense grid-cols-6 gap-10 m-5 max-lg:grid-cols-3 max-sm:grid-cols-1'>
                {

                    details.map((item) => {
                        return (
                            <a href={`/product?categories=${Handle_link(item.name)}`}>
                                <div className=' text-center border-2 cursor-pointer hover:border-green-600  resize-none  hover:text-blue-600'>
                                    <div className='m-2 flex justify-center'>
                                        <Image src={item.image} height={200}
                                            width={200} />
                                    </div>
                                    <h1 className='mb-3 '>{item.name}</h1>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopCatgeory;