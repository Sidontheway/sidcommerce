"use client"

import React from 'react'
import {SfIconCall} from "@storefront-ui/react"

import DropDown from './DropDown'

const ShopByDepartment = {
  title :"Shop By Department ",
  item:[
    "New Arrivals","Best Sellers","Special Offers ","Milk & Creams ","Fruits","Vegetables","Ocean Food","Butters & Eggs","Lamps & Lighting","Fresh Meats","Seeds & Spices"
  ]
}

const home = {
  title:"Home",
  item:[
    "Home 1","Home 2","Home 3","Home 4","Home 5"
  ]
}

const pages = {
  title:"Pages",
  item:[
    "Page 1","Page 2","Page 3"
  ]
}
const Page = () => {
  return (
    <div className='flex justify-evenly bg-gray-100 max-lg:hidden'>
      <DropDown details = {ShopByDepartment}/>
      <DropDown details = {home}/>
      <h1 className='text-lg font-semibold p-5'>Shop</h1>
      <DropDown details = {pages}/>
      <h1 className='text-lg font-semibold p-5'>Blog</h1>
      <h1 className='text-lg font-semibold p-5'>Contact</h1>
      <div className='p-5 max-xl:hidden'>
        <SfIconCall/>Hotline: <span className="text-lg font-semibold">1-800-234-5678</span>
      </div>
    </div>
  )
}

export default Page;