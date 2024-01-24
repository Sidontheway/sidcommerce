"use client"
import { useId, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SfModal, SfButton, SfIconClose, SfRating, SfIconShoppingCart } from '@storefront-ui/react';
import { products } from './product';
import Image from 'next/image';
import QuantitySelector from './ProductPage/QuantitySelector';
import AlertButton from './ProductPage/AlertButton';

export default function Modal(props) {
    var filtered_product = products.filter(obj => obj.id === Number(props.productid));
    const prd_description_list = filtered_product[0].desc.split(".").slice(0, -1);
    const headingId = useId();
    const descriptionId = useId();
    const modalRef = useRef(null);
    const backdropRef = useRef(null);

    const [isClick, setisClick] = useState(false);
    const handleClick = () => {
        setisClick(true);
        setTimeout(() => {
            setisClick(false);
        }, 1500);
    }

    return (
        <>

            {/* Backdrop */}
            <CSSTransition
                in={props.isOpen}
                nodeRef={backdropRef}
                timeout={200}
                unmountOnExit
                classNames={{
                    enter: 'opacity-0',
                    enterDone: 'opacity-100 transition duration-200 ease-out',
                    exitActive: 'opacity-0 transition duration-200 ease-out',
                }}
            >
                <div ref={backdropRef} className="fixed inset-0 bg-neutral-700 bg-opacity-50 z-30" />
            </CSSTransition>

            {/* Modal */}
            <CSSTransition
                in={props.isOpen}
                nodeRef={modalRef}
                timeout={200}
                unmountOnExit
                classNames={{
                    enter: 'translate-y-10 opacity-0',
                    enterDone: 'translate-y-0 opacity-100 transition duration-200 ease-out',
                    exitActive: 'translate-y-10 opacity-0 transition duration-200 ease-out',
                }}
            >
                <SfModal
                    open
                    onClose={props.close}
                    ref={modalRef}
                    as="section"
                    role="alertdialog"
                    aria-labelledby={headingId}
                    aria-describedby={descriptionId}
                    className="w-full md:max-w-4xl z-40"
                >
                    <header>
                        <SfButton square variant="tertiary" className="absolute right-2 top-2" onClick={props.close}>
                            <SfIconClose />
                        </SfButton>
                    </header>
                    <div className='grid grid-cols-2 max-sm:grid-cols-1'>
                        <div id="promoModalDesc" className="mt-2">
                            <Image height={400} width={400} src={filtered_product[0].image} />
                        </div>

                        <div>
                            <h3 id="promoModalTitle" className="font-bold typography-headline-4 md:typography-headline-3  text-xl">
                                {filtered_product[0].title}
                            </h3>
                            <SfRating size="xs" value={3} max={5} className='m-3 mb-5' />(1 Review)

                            <hr className='w-full h-0.5 border-collapse bg-gray-200 m-4 ml-0 mr-0' />

                            <h1 className='text-xl font-extrabold'>${filtered_product[0].price}</h1>
                            <hr className='w-full h-0.5 border-collapse bg-gray-200 m-4 ml-0 mr-0' />
                            {/* <h1>{filtered_product[0].desc}</h1> */}

                            <ul className=' list-disc'>
                                {
                                    prd_description_list.map((description) => {
                                        return <li className='mb-2'>{description}.</li>
                                    })
                                }
                            </ul>

                            <hr className='w-full h-0.5 border-collapse bg-gray-200 m-4 ml-0 mr-0' />

                            <div className='flex justify-around items-center'>
                                <QuantitySelector />
                                <SfButton size="lg" onClick={handleClick} slotPrefix={<SfIconShoppingCart size="lg" />}>
                                    Add to cart
                                </SfButton>
                            </div>
                        </div>
                    </div>
                    {
                        isClick ? <div className='relative  top-[-100px]'><AlertButton itemName = {filtered_product[0].title}/></div> : ""

                    }
                </SfModal>
            </CSSTransition>
        </>
    );
}
