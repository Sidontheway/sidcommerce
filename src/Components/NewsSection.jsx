import { SfButton } from '@storefront-ui/react';

const cardDetails = [
  {
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/card-3.png',
    title: 'Sip Sustainably: The Rise of Boxed Water',
    description:
      'Boxed water is a sustainable alternative to traditional plastic bottles, made from renewable resources.',
    button: 'Read more',
  },
  {
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/card-2.png',
    title: 'Ride the Future: Exploring the Benefits of e-Bikes',
    description:
      'Eco-friendly, efficient, and fun modes of transportation that provide a range of benefits for riders and the environment.',
    button: 'Read more',
  },
  {
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/card-1.png',
    title: 'Unleash the Ultimate Listening Experience',
    description:
      'Audiophile headphones offer unmatched sound quality and clarity, making them the go-to choice for music enthusiasts.',
    button: 'Read more',
  },
];

export default function NewsSection() {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap justify-center m-10">
      {cardDetails.map(({ image, title, description, button }) => (
        <div
          key={title}
          className="flex flex-col min-w-[325px] max-w-[375px] lg:w-[496px] relative border border-neutral-200 rounded-md hover:shadow-xl"
        >
          <a
            className="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
            href="#"
            aria-label={title}
          />
          <img src={image} alt={title} className="object-cover h-auto rounded-t-md aspect-video" />
          <div className="flex flex-col items-start p-4 grow">
            <p className="font-medium typography-text-base">{title}</p>
            <p className="mt-1 mb-4 font-normal typography-text-sm text-neutral-700">{description}</p>
            <SfButton size="sm" variant="tertiary" className="relative mt-auto">
              {button}
            </SfButton>
          </div>
        </div>
      ))}
    </div>
  );
}