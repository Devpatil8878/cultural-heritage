"use client"

import Image from "next/image";
import "./globals.css"
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUSER } from "../../store/actions";
import LoggedIn from "./components/LoggedIn";

export default function Home() {

    const router = useRouter();
    const isLoggedIn = useSelector((state : any) => state.rootReducer.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkUser = async () => {
          try {
            const response = await fetch('/api/user');
            if (response.ok) {
              dispatch(login())
              const data = await response.json();
              console.log(data.user)
              dispatch(setUSER({
                name: data.user.name,
                email: data.user.email,
              })) 
            }
          } catch (error) {
            console.error('Error checking authentication:', error);
            dispatch(logout())
            router.push('/login');
          }
          console.log("checked for User")
          
        };
    
        checkUser();
      }, []);
  

      if(isLoggedIn){
        return (
            <>
                <LoggedIn />
            </>
        )
      }
      else{
        return (
            <>
                <Navbar />
                <Homepage />
            </>
        )
      }



      

 
}
