"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';


interface FormData {
    email: string;
    password: string;
  }


const page = () => {
    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
      });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          if (response.ok) {
            console.log('User logged in successfully');
            toast.success('User Logged in Successfully', {
              position: 'bottom-right',
              style: {
                backgroundColor: "black",
                color: "white",
                border: "1px solid white"
              }
            });
            router.push("/");
          } else {
            const data = await response.json();
            console.log(data.message || 'Error logging in');
            toast.error(data.message, {
              position: 'bottom-right',
              style: {
                backgroundColor: "black",
                color: "white",
                border: "1px solid white"
              }
            });
          }
        } catch (error: any) {
          // console.error('Error:', error);
          console.log('Internal Server Error');
          toast.error(error, {
            position: 'bottom-right',
            style: {
              backgroundColor: "black",
              color: "white",
              border: "1px solid white"
            }
          });
        }
      };


  return (
    <>
    <div className='w-full h-screen flex items-center bg-black'>
    <div className="form-content w-[60%] self-center m-auto content-center h-full bg-black">
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                <a href="#" target="_blank">Welcome to our website</a>
                    <div className="input-field">
                        <input className='text-white' type="email" value={formData.email} name="email" onChange={handleChange} required/>
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input className='text-white' type="password" value={formData.password} name="password" onChange={handleChange} required/>
                        <label>Password</label>
                    </div>
                    <a href="#" className="forgot-pass-link">Forgot password?</a>
                    <button type="submit">Log In</button>
                </form>
                <div className="bottom-link text-white">
                    Don't have an account?
                    <a href="/register" id="signup-link"> Signup</a>
                </div>
            </div>

            </div>
    </>
  )
}

export default page