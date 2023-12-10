
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import FoodSection from '@/components/FoodSection'
import CategoriesSection from '@/components/categoriesSection'
import TopRestaurants from '@/components/Restaurants'
import Footer from "@/components/Footer"
import CartPage from '@/components/cartpage'
import { CartProvider } from '@/app/CartContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Meal',
  description: 'Topnotch Food order app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider>   
      <Navbar /> 
        <div className='flex-grow'>
{children}
        </div>
      
      
      <Footer />    

      </CartProvider>
      </body>
    </html>
  )
}
