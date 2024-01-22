import { Inter } from 'next/font/google'
import './globals.css'

import NavBarTop from '@/Components/NavBarTop/NavBarTop'
import NavBarBottomMain from "@/Components/NavBarBottom/NavBarBottomMain"
import Footer from '@/Components/Footer'
import Home from '@/Pages/Home'
import Filters from '@/Components/ProductPage/MainPage'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sidcommerce',
  description: 'Your complete shopping package',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavBarTop/>
        <NavBarBottomMain/>
        {/* <Home/> */}
         <Filters/>
        {/* <Footer/> */}
        {children}
        
      </body>
    </html>
  )
}
