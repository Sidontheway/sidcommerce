import Image from "next/image";
import { useState } from "react";
import {
    SfRating,
    SfCounter,
    SfLink,
    SfIconShoppingCart,
    SfIconFavorite,
    useDisclosure
} from '@storefront-ui/react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { SfTooltip } from '@storefront-ui/react';
import Modal from "./Modal";


export default function ProductItem(props) {
    const { isOpen, open, close } = useDisclosure({ initialValue: false });

    return (
        <div className=" rounded-md hover:shadow-lg w-[250px]  group hover:border hover:border-neutral-200 max-sm:w-[350px]">
            <div className="relative flex flex-col justify-items-center">
                <SfLink href="#" className="block">
                    <Image
                        src={props.details.image}
                        width={400}
                        height={350}
                    />
                </SfLink>
                <div
                    className="mt-[-70px] p-2 pt-5 bg-white  justify-center gap-x-7 hidden group-hover:flex z-[2px] relative h-[70px] "
                >
                    <SfTooltip label="Favorite">
                        <SfIconFavorite size='lg' className=' text-gray-800 cursor-pointer rounded-full  hover:bg-green-600 hover:text-white p-1' />
                    </SfTooltip>

                    <SfTooltip label="Preview">
                        <VisibilityOutlinedIcon fontSize="large" onClick={open}
                            className=' text-gray-800 cursor-pointer rounded-full  hover:bg-green-600 hover:text-white p-1' />
                    </SfTooltip>

                    <SfTooltip label="Add To Cart">
                        <SfIconShoppingCart size="lg" className='text-gray-800 cursor-pointer rounded-full  hover:bg-green-600 hover:text-white p-1' />
                    </SfTooltip>
                </div>
            </div>
            <div className="p-4  flex flex-col gap-2">
                <SfLink href="#" variant="secondary" className="no-underline text-md font-semibold">
                    {props.details.title}
                </SfLink>
                <div className="flex items-center pt-1">
                    <SfRating size="xs" value={3} max={5} />

                    <SfLink href="#" variant="secondary" className="pl-1 no-underline">
                        <SfCounter size="xs">{13}</SfCounter>
                    </SfLink>
                </div>
                <span className="block pb-2 font-semibold typography-text-lg">${props.details.price}</span>
            </div>
            <div className="w-[50%]">
                <Modal productid={props.details.id} isOpen={isOpen} close={close} open={open} />
            </div>

        </div>
    );
}
