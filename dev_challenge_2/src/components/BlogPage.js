import React from 'react'
import rect1 from '../assets/rect1.png'
import rect2 from '../assets/rect2.png'

const BlogPage = () => {
  return (
    <div className='blog'>
      <div className='blog-container' id='blogpage'>
        <p>A lot is happening. <br /> We are  blogging about it.</p>
      </div>
      <div className='images-container'>     
      <div className='image-container'>
        <img src={rect1} alt="blogpicture" />
        <p>August 24, 2022</p>
        <h3>Getting Started As A Front-end Developer</h3>
        <a href="https://supergirlp.hashnode.dev/getting-started-as-a-front-end-developer" target="_blank">Read Full Article</a>
      </div>
      <div className='image-container'>
        <img src={rect2} alt="blogpicture" />
        <p>August 31, 2022</p>
        <h3>Six Websites All Front-end Developers Should Know.</h3>
        <a href="https://supergirlp.hashnode.dev/six-websites-all-front-end-developers-should-know" target="_blank">Read Full Article</a>
      </div>
      </div>
    </div>
  )
}

export default BlogPage