import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-evenly items-center bg-slate-800  text-gray-400 h-24 flex-col md:flex-row'>
        <div className='p-2 text-center'>
            <p>Copyright &#169;2024 All rights reserved | This template is made with 🥰 by vivek.jaiswal</p>
        </div>
        <div className='text-white'>
            <p>Terms &nbsp;&nbsp;Privacy &nbsp;&nbsp;Compliances</p>
        </div>
    </div>
  )
}

export default Footer