import React, { useState } from 'react'

import { FaArrowLeft ,FaLocationDot} from "react-icons/fa6";
import { Link,NavLink } from 'react-router-dom';
//logo
import logo from "../assets/logo.png"
//component
import JobCard from '../components/JobCard';
import Navbar from '../components/Navbar'
import all_jobs from '../assets/all_jobs';
const Jobs = () => {
 
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
                    className="text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
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
     {/* <!-- Filter Jobs --> */}
    <section className="bg-green-50 py-4">
      <div className="container mx-auto px-4">
        <div className="relative">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Filter jobs..."
          />
        </div>
      </div>
    </section>


    {/* <!-- All Jobs --> */}
    <section className="bg-green-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {all_jobs.map((job)=>{
            return (
              <>
              <JobCard singleJob={job}/>
              </>
            )
           })}
    
          {/* <!-- Job Listing 1 --> */}
          {/* <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Full-Time</div>
                <h3 className="text-xl font-bold">Senior Vue Developer</h3>
              </div>

              <div className="mb-5">
                We are seeking a talented Front-End Developer to join our team
                in Boston, MA. The ideal candidate will have strong skills in
                HTML, CSS, and JavaScript...
              </div>

              <h3 className="text-green-500 mb-2">$70 - $80K / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <FaLocationDot class="fa-solid fa-location-dot text-lg"></FaLocationDot>
                  Boston, MA
                </div>
                <Link
                  to="/job"
                  class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */}
          {/* <!-- Job Listing 2 --> */}
          {/* <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">Remote</div>
                <h3 class="text-xl font-bold">Front-End Engineer (Vue)</h3>
              </div>

              <div class="mb-5">
                Join our team as a Front-End Developer in sunny Miami, FL. We
                are looking for a motivated individual with a passion...
              </div>

              <h3 class="text-green-500 mb-2">$70K - $80K / Year</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <FaLocationDot class="fa-solid fa-location-dot text-lg"></FaLocationDot>
                  Miami, FL
                </div>
                <Link
                  to="/job"
                  class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */}
          {/* <!-- Job Listing 3 --> */}
          {/* <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">Remote</div>
                <h3 class="text-xl font-bold">Vue.js Developer</h3>
              </div>

              <div class="mb-5">
                Are you passionate about front-end development? Join our team in
                vibrant Brooklyn, NY, and work on exciting projects that make a
                difference...
              </div>

              <h3 class="text-green-500 mb-2">$70K - $80K / Year</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <FaLocationDot class="fa-solid fa-location-dot text-lg"></FaLocationDot>
                  Brooklyn, NY
                </div>
                <Link
                  to="/job"
                  class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */}

          {/* <!-- Job Listing 4 --> */}
          {/* <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">Part-Time</div>
                <h3 class="text-xl font-bold">Vue Front-End Developer</h3>
              </div>

              <div class="mb-5">
                Join our team as a Part-Time Front-End Developer in beautiful
                Pheonix, AZ. We are looking for a self-motivated individual with
                a passion...
              </div>

              <h3 class="text-green-500 mb-2">$60 - $70K / Year</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <FaLocationDot class="fa-solid fa-location-dot text-lg"></FaLocationDot>
                  Pheonix, AZ
                </div>
                <Link
                  to="/job"
                  class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */}
          {/* <!-- Job Listing 5 --> */}
          {/* <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">Full-Time</div>
                <h3 class="text-xl font-bold">Full Stack Vue Developer</h3>
              </div>

              <div class="mb-5">
                Exciting opportunity for a Full-Time Front-End Developer in
                bustling Atlanta, GA. We are seeking a talented individual...
              </div>

              <h3 class="text-green-500 mb-2">$90K - $100K / Year</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <FaLocationDot class="fa-solid fa-location-dot text-lg"></FaLocationDot>
                  Miami, FL
                </div>
                <Link
                  to="/job"
                  class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */}
          {/* <!-- Job Listing 6 --> */}
          {/* <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">Remote</div>
                <h3 class="text-xl font-bold">Vue Native Developer</h3>
              </div>

              <div class="mb-5">
                Join our team as a Front-End Developer in beautiful Portland,
                OR. We are looking for a skilled and enthusiastic individual...
              </div>

              <h3 class="text-green-500 mb-2">$100K - $110K / Year</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <FaLocationDot class="fa-solid fa-location-dot text-lg"></FaLocationDot>
                  Brooklyn, NY
                </div>
                <Link
                  to="/job"
                  class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>

    </>
  )
}

export default Jobs
