'use client'
import React, {useState, useEffect} from 'react'
import WelcomePage from '@/components/WelcomePage'

import CartPage from '@/components/WelcomeCartpage'

export default function Welcome() {
        const [userData, setUserData ] = useState(null)
        const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        const storedUserData = localStorage.getItem('UserData')
        // console.log(storedUserData)
        // setUserData(storedUserData)
        if(storedUserData){
            const parsedUserData = JSON.parse(storedUserData)
            setUserData(parsedUserData)
            console.log(userData)
            console.log('user data fired')
        }
        setIsLoading(false)
    }, [])
  return (
    <div>
        {
            isLoading ? <p>Loading .....</p> : <WelcomePage userData={userData}/>
        }
        <CartPage/>
        
        </div>
    
  )
}
