import Link from 'next/link'
import React from 'react'
import "../../../styles/project.css"
const page = () => {
  return (
    <div className=''>
      <div className="center max-w-screen-lg mx-auto py-10 px-3">
        <h1 className='md:text-4xl font-bold text-xl'>Amado E-commerce Project</h1>
        <p className='text-gray-500 mt-4 w-full md:w-1/2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi quod magni nihil repellat at recusandae repudiandae, facere qui eligendi fuga nulla dolore praesentium voluptatum saepe doloremque necessitatibus molestias atque!</p>

        <div className="gallary flex items-center gap-3 flex-wrap">
          <img src="https://imgs.search.brave.com/1emUa7gBt_osxnfUCTfuG11pPLyDJsVJOYQ7hM5_nYc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/ZWJzaXRlLWRldmVs/b3BtZW50XzUzODc2/LTk1MzE1LmpwZz9z/aXplPTYyNiZleHQ9/anBn" alt="" />
          <img src="https://imgs.search.brave.com/1emUa7gBt_osxnfUCTfuG11pPLyDJsVJOYQ7hM5_nYc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/ZWJzaXRlLWRldmVs/b3BtZW50XzUzODc2/LTk1MzE1LmpwZz9z/aXplPTYyNiZleHQ9/anBn" alt="" />
          <img src="https://imgs.search.brave.com/1emUa7gBt_osxnfUCTfuG11pPLyDJsVJOYQ7hM5_nYc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/ZWJzaXRlLWRldmVs/b3BtZW50XzUzODc2/LTk1MzE1LmpwZz9z/aXplPTYyNiZleHQ9/anBn" alt="" />
          <img src="https://imgs.search.brave.com/1emUa7gBt_osxnfUCTfuG11pPLyDJsVJOYQ7hM5_nYc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/ZWJzaXRlLWRldmVs/b3BtZW50XzUzODc2/LTk1MzE1LmpwZz9z/aXplPTYyNiZleHQ9/anBn" alt="" />
        </div>
        <div className="project-details mt-5">
          <h1 className="md:text-3xl text-xl font-bold">PROJECT <span className='text-[var(--main-color)]'>DETAILS</span></h1>
          <p className=' mt-3 text-lg text-gray-500 mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic deserunt non aliquid fugit. Totam, temporibus voluptate, sunt architecto nihil nam quidem voluptatibus, minima reiciendis maiores commodi hic deserunt iure. Voluptate sint sunt id perspiciatis quidem. Optio dolor laudantium veniam quis fugiat necessitatibus eos architecto pariatur rerum illum repellendus, animi repellat officiis perspiciatis alias beatae similique dolores reiciendis aspernatur iusto minima obcaecati ad! Unde quasi culpa nobis, vel ad aliquid optio dolor animi dolores laudantium quisquam ea maxime ab magni facilis doloremque perferendis sapiente dignissimos voluptatem? Nemo nisi sunt voluptatum nam minima id. Reiciendis, modi! Molestias, incidunt! Illum id corrupti blanditiis!</p>
         <div className=" mb-5">
         <h1 className="md:text-3xl text-xl font-bold">TECHNOLOGIES <span className='text-[var(--main-color)] mt-4'>USED</span></h1>
         <div className="">
            <ul className='ms-3 mt-4'>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Node Js</li>
              <li>Python</li>
            </ul>
         </div>
         </div>
        <div className="flex gap-x-3">
         <button className="project_details_button"><Link href="">Live Link</Link></button>
        </div>
        </div>
      </div>

    </div>
  )
}

export default page