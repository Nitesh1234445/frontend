import React from 'react'
import Navbar from '../components/Navbar'

const SingleBlog = () => {
  return (
    <>
      <Navbar/>
      <div className='single-blog px-[100px] mt-4'>
        <div className= 'flex w-full min-h-[400px] pt-5 '>
          <div className='left w-[40%] h-full '>
            <img className='w-full rounded-lg' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg" alt="Image" />
          </div>
          <div className='ml-4'>
            <h3 className='text-3xl font-[500]'>Web Development</h3>
            <p className='text-[gray] text-[14px] mt-3 mb-3'>Created : 7 Oct 2025</p>
            <b>Description</b>
            <p className='text-[gray] text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos, qui aperiam tempora aut soluta possimus dolores repellat voluptatibus.</p>
          </div>
        </div>
        <div>
            Content
        </div>
      </div>
    </>
  )
}

export default SingleBlog
