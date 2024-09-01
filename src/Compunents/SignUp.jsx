import React from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
   <>
     <div className=" flex items-start justify-center">
      <div className="bg-white p-8 mt-14 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign up</h2>
        <form className="mt-6">
          <div className="mb-4">
            <label className="float-left block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="float-left block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="float-left block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Sign up
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4">
          Already have an account? <Link to={"/SignIn"}>Sing In</Link>
        </p>
      </div>
    </div>
   </>
  )
}
