import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'

//component 
import Home from './components/Home'
import JobCard from './components/JobCard'

//pages
import Job from './pages/Job'
import Jobs from "./pages/Jobs"
import Add_job from './pages/Add_job'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card' element={<JobCard />} />

          <Route path='/job' element={<Job />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/add-job' element={<Add_job />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
