import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import logo from "../assets/logo.png"
const Not_found = () => {
  return (
    <>
     <nav className="bg-green-700 border-b border-green-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div
              className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
            >
              {/* <!-- Logo --> */}
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={logo} alt="Vue Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Vue Jobs</span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <Link
                    to="/"
                    className="text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</Link>

                  <Link
                    to="/jobs"
                    className="text-white hover:bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs</Link>
                  <Link
                    to="/add-job"
                    className="text-white hover:bg-green-900  hover:text-white  rounded-md px-3 py-2"
                  >Add Job</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="text-center flex flex-col justify-center items-center h-96">
      <i className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
        >Go Back</Link>
    </section>

    </>
  )
}

export default Not_found
