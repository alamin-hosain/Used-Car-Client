import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { setAuthToken } from '../api/auth';
import { AuthContext } from '../contexts/AuthProvider'

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;

    signIn(email, password)
      .then(res => {
        axios.get(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/users?email=${email}`)
          .then(function (response) {
            const role = response.data[0].role;
            setAuthToken(res.user, role)
          })
          .catch(e => console.error(e))

        toast.success('Login Successful')
        navigate(from, { replace: true });
      })
      .catch(e => console.error(e))
  }


  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const role = 'Buyer';
        setAuthToken(result.user, role)
        toast.success('Login Successful')
        navigate(from, { replace: true });
      })
      .catch(e => console.error(e))
  }


  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f4f5f7]">
      <div className="w-full max-w-md  bg-white p-10 rounded-xl py-20 shadow-lg">
        <div>

          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>

        </div>
        <form className="mt-12 space-y-6 mb-4" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div className="text-sm">
              <p className="font-medium  ">New to UsedAuto?
                <Link className='ml-2 text-indigo-600 hover:text-indigo-500' to='/signup'>Sign Up</Link>
              </p>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                <svg className="h-5 w-5 text-white group-hover:text-white-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>

        <button onClick={handleGoogleSignIn} className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">

            <svg className="h-5 w-5 text-white group-hover:text-white-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
          </span>
          Sign In With Google
        </button>

      </div>
    </div>
  )
}

export default Login