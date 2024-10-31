import React, { useEffect, useState } from 'react'
import { Link,NavLink, useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"

const Add_job = () => {
  const location = useLocation();
  
  // const singleJob =location? location.state ? location.state.singleJob : null:null;
  // const singleJob=location?.state?.singleJob
// if(location){
//   if(location.state){
//     singleJob=location.state.singleJob
//   }
// }
//All of these above from line 8 to 14  are equivalent in working
 const singleJob = location?.state?.singleJob;

 

  
  
  const [job,setJob] = useState({
    title:"",
    type:"",
    location:"",
    description:"",
    salary:"",
    company:{
      name:"",
      description:"",
      contactEmail:"",
      contactPhone:""
    },
    id:Math.random() 
  })
  useEffect(()=>{
    if(singleJob !== null && singleJob !== undefined){
      setJob(singleJob)

    }
  },[])
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
                    className="text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs</Link>
                  <Link
                    to="/add-job" state={{singleJob}}
                    className="text-white bg-green-900 hover:bg-gray-900 hover:text-white  rounded-md px-3 py-2"
                  >Add Job</Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-green-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Job Type</label
              >
              <select
                id="type"
                name="type"
                value={job.type}
                className="border rounded w-full py-2 px-3"
                required
            
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label >
              <input
                type="text"
                id="name"
                value={job.title}
                name="name"
                readOnly
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label>
              <textarea
                id="description"
                value={job.description}
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Salary</label>
              <select
                id="salary"
                name="salary"
                value={job.salary}
                className="border rounded w-full py-2 px-3"
                required
              >
                <option value="Under $50K">under $50K</option>
                <option value="$50K - $60K">$50 - $60K</option>
                <option value="$60K - $70K">$60 - $70K</option>
                <option value="$70K - $80K">$70 - $80K</option>
                <option value="$80K - $90K">$80 - $90K</option>
                <option value="$90K - $100K">$90 - $100K</option>
                <option value="$100K - $125K">$100 - $125K</option>
                <option value="$125K - $150K">$125 - $150K</option>
                <option value="$150K - $175K">$150 - $175K</option>
                <option value="$175K - $200K">$175 - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                value={job.location}
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Company Name</label >
              <input
                type="text"
                id="company"
                value={job.company.name}
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
                >Company Description</label>
              <textarea
                id="company_description"
                name="company_description"
                value={job.company.description}
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label>
              <input
                type="email"
                id="contact_email"
                value={job.company.contactEmail}
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div 
            className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                value={job.company.contactPhone}
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit">
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Add_job;
