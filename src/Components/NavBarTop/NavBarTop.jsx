"use client"

import { useState } from 'react';
import {
  SfButton,
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfInput,
  SfIconSearch,
} from '@storefront-ui/react';

import Image from 'next/image'
import NavBarTopCatg from './NavBarTopCatg';
import SideBar from '@/Components/SideBar'


export default function NavBarTop() {
  const [inputValue, setInputValue] = useState('');

  const [isOpen, setisOpen] = useState(false);
  const toggle =()=>{
    setisOpen(!isOpen);
  }


  
  const actionItems = [
    {
      icon: <SfIconFavorite size='lg' className=' text-gray-600' />,
      label: 'fav_icon',
      ariaLabel: 'Wishlist',
      role: 'button',
    },
    {
      icon: <SfIconShoppingCart size='lg' className=' text-gray-600' />,
      label: 'shopping_cart',
      ariaLabel: 'Cart',
      role: 'button',
    },
    {
      label: 'Log in',
      icon: <SfIconPerson size='lg' className=' text-gray-600' />,
      ariaLabel: 'Log in ',
      role: 'login',
    },
  ];

  const search = (event) => {
    event.preventDefault();
    alert(`Successfully found 10 results for ${inputValue}`);
  };

  return (
    <header className="flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-white border-b border-neutral-200 flex-row-reverse relative">
      <div className="flex flex-wrap lg:flex-nowrap items-center flex-row md:justify-start h-full max-w-[1536px] w-full justify-evenly max-lg:ml-5 max-lg:mr-0 ml-20 mr-20 " onClick={toggle}>

        <a
          href="/"
          aria-label="SF Homepage"
          className="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
        >
          <Image
            src="/Assests/logo.png"
            alt="logo"
            width="150"
            height="150"

          />
        </a>


        <form
          role="search"
          className=" flex order-last lg:order-3 mt-2 lg:mt-0 pb-2 lg:pb-0 ml-20 w-[50%] max-lg:w-full gap-5"
          onSubmit={search}
        >
          {/* <SfIconMenu className='hidden w-8 h-8 mt-2 cursor-pointer max-lg:block' /> */}
          <SideBar/>
          <SfInput
            value={inputValue}
            type="search"
            className="[&::-webkit-search-cancel-button]:appearance-none "
            placeholder="I'm shopping for ..."
            wrapperClassName="flex-1 h-10 pr-0 pl-0 max-lg:pl-5"
            size="base"
            slotPrefix={
              <span className="max-lg:hidden">
                <NavBarTopCatg />
              </span>

            }
            slotSuffix={
              <span className="flex ">
                <SfButton
                  rounded
                  aria-label="search"
                  className="rounded-l-none max-lg:hidden font-semibold text-md bg-[rgb(95,163,15)] hover:bg-[rgb(95,163,15)]"
                >
                  Search
                </SfButton>

                <SfButton
                  rounded
                  aria-label="search"
                  type="submit"
                  className="rounded-l-none lg:hidden bg-[rgb(95,163,15)] hover:bg-[rgb(95,163,15)] "
                >
                  <SfIconSearch />

                </SfButton>

              </span>
            }
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>



        <nav className="flex-1 flex justify-end lg:order-last lg:ml-4">
          <div className="flex flex-row flex-nowrap gap-3 max-lg:gap-0">
            {

              actionItems.map((actionItem) => (
                <SfButton
                  key={actionItem.ariaLabel}
                  className="mr-2 -ml-0.5 rounded-md text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700"
                  aria-label={actionItem.ariaLabel}
                  variant="tertiary"
                  square
                  slotPrefix={actionItem.icon}

                >
                  {
                    actionItem.label === 'fav_icon' || actionItem.label === "shopping_cart" ?(<span className='text-white font-semibold text-sm bg-green-600 rounded-full h-5 w-5 ml-[-27px] mb-[-30px]'>
                      5
                    </span>):null
                  }
                  {actionItem.role === 'login' && (
                    <p className="hidden xl:inline-flex whitespace-nowrap text-md font-extrabold text-black">{actionItem.label}</p>
                  )}
                </SfButton>
              ))}
          </div>
        </nav>
      </div>

    </header>
  );
}
