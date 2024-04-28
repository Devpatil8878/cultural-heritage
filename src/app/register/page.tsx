"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const page = () => {

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        password: "",
        confirmpassword: ""
      });

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const router = useRouter();

    const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/tokenregister", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              console.log("User registered successfully");
              toast.success('User registered successfully', {
                position: 'bottom-right',
                style: {
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid white"
                }
              });
              router.push("/login");
            } else {
              console.error("Error registering user");
              toast.error('Error registering user', {
                position: 'bottom-right',
                style: {
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid white"
                }
              });
            }
          } catch (error) {
            console.error("Error:", error);
        }
    }

  return (
    <>
    <div className='w-full h-screen flex items-center bg-black'>
    <div className="form-box signup  w-[60%] self-center m-auto content-center h-full bg-black">
            <div className="form-detail">
                <h2>Create Account</h2>
                <p>To become a part of our community, please sign up using your personal information.</p>
            </div>
            <div className="form-content">
                <h2>SIGNUP</h2>
                <form onSubmit={handlesubmit}>
                    <div className="input-field">
                        <input className='text-white'  type="Name" name='name' value={formData.name} onChange={handleChange} required/>
                        <label>Enter your Name</label>
                    </div>
                    <div className="input-field">
                        <input className='text-white'  type="Mobile no." name='number' value={formData.number} onChange={handleChange} required/>
                        <label>Enter your mobile number</label>
                    </div>
                    <div className="input-field">
                        <input className='text-white'  type="text" name='email' value={formData.email} onChange={handleChange} required/>
                        <label>Enter your email</label>
                    </div>
                    <div className="input-field">
                        <input className='text-white'  type="password" name='password' value={formData.password} onChange={handleChange} required/>
                        <label>Create password</label>
                    </div>
                    <div className="input-field text-white">
                        <input className='text-white' type="password" name='confirmpassword' value={formData.confirmpassword} onChange={handleChange} required/>
                        <label>Confirm password</label>
                    </div>
                    <div className="policy-text">
                        <input type="checkbox" id="policy"/>
                        <label >
                            I agree the
                            <a href="#" className="option">Terms & Conditions</a>
                        </label>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <div className="bottom-link">
                    Already have an account? 
                    <a href="/login" id="login-link">Login</a>
                </div>
            </div>
            </div>
            </div>
            
    </>
  )
}

export default page