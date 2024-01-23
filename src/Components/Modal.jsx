import { SfModal, SfButton, SfIconClose , SfRating } from '@storefront-ui/react';
import { products } from './product';
import Image from 'next/image';

export default function Modal(props) {
    var filtered_product = products.filter(obj => obj.id === Number(props.productid));
    console.log(filtered_product[0].title);
    return (
        <>
            <SfModal
                open={props.isOpen}
                onClose={props.close}
                className="w-full md:max-w-5xl z-50"
                as="section"
                role="alertdialog"
                aria-labelledby="promoModalTitle"
                aria-describedby="promoModalDesc"
            >
                <header>
                    <SfButton square variant="tertiary" className="absolute right-2 top-2" onClick={props.close}>
                        <SfIconClose />
                    </SfButton>
                </header>
                <h3 id="promoModalTitle" className="font-bold typography-headline-4 md:typography-headline-3 flex justify-center text-xl mb-5">
                    {filtered_product[0].title}
                    <SfRating size="xs" value={3} max={5} />
                </h3>
                <div className='grid grid-cols-2'>
                    <div id="promoModalDesc" className="mt-2">
                        <Image height={500} width={500} src={filtered_product[0].image} />
                    </div>

                    <div>
                        <h1>{filtered_product[0].desc}</h1>

                    </div>
                </div>
            </SfModal>
        </>
    );
}
