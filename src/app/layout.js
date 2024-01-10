import { Inter } from 'next/font/google'
import './globals.css'

import NavBarTop from '@/Components/NavBarTop'
import NavBarBottomMain from "@/Components/NavBarBottom/NavBarBottomMain"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sidcommerce',
  description: 'Your complete shopping package',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarTop/>
        <NavBarBottomMain/>
        {children}
        
      </body>
    </html>
  )
}
