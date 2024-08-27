import React from "react";
import "./App.css";
function Main() {
    return(
    <section>
        <div className="container mx-auto px-4">
          <div className="flex grid-cols-6 gap-4 items-start">
            <div className="lg:col-span-7">
                <div className="flex-row pe-xl-5">
                  <div className="flex col-sm-6">
                <img className="rounded" src="/PICS 1.jpeg" alt="Pics" style={{height:400, width:800}}/>
                </div>
                </div>
            </div>
            <div className="flex col-sm-6 w-1/2">
            <div className="row mb-4 ">
               <div className="col-sm-6 mb-2 mb-sm-0">
              <div className="bg-gray-800 text-white rounded text-center p-3">
                <span className="text-3xl font font-semibold text-white">6+</span>
                <p className="mb-0 ">Years of experience</p>
                </div>
              
              </div>
              <div className="col-sm-6">
                <div className="bg-blue-500 mb-2 rounded text-center p-3">
                  <span className="text-3xl font-semibold text-white">3.5K</span>
                  <p className="mb-0 text-white">Graduated Students</p>
                </div>    
          </div>
          <img src="/image-350x215.jpg" alt="software pics"/>
          </div>
          </div>
          <div className="col-lg-5">
          <span className="text-black bg-gray-100 text-sm rounded px-3 py-2">💻 Building a strong foundation for software development!!</span>
      <h2 className="my-4 text-2xl font-bold">Our Mission for Technological Innovation.</h2>
      <p className="mb-4 text-black-700 text-start">Our mission is to develop software talent through innovative technology, equipping emerging developers with essential skills. We aim to build a skilled workforce capable of shaping the future of software technology.</p>
      <ul className="list-none mb-4 space-y-3">
        <li className="flex items-center font-normal text-black-700">
        <span className="w-3 h-3 bg-blue-800 rounded-full mr-3"></span>
        Offer hands-on training in the latest software development tools and technologies.
        </li>
        <li className="flex items-center font-normal text-black-700">
        <span className="w-3 h-3 bg-blue-800 rounded-full mr-3"></span>
        Provide continuous learning to keep developers updated on evolving industry trends.
        </li>
        <li className="flex items-center font-normal text-black-700">
        <span className="w-3 h-3 bg-blue-800 rounded-full mr-3"></span>
        Facilitate collaborative projects and mentorship programs to enhance teamwork.
        </li>
        <li className="flex items-center font-normal text-black-700">
        <span className="w-3 h-3 bg-blue-800 rounded-full mr-3"></span>
        Encourage innovative thinking to providing solutions in software development.
        </li>
        <li className="flex items-center font-normal text-black-700">
        <span className="w-3 h-3 bg-blue-800 rounded-full mr-3"></span>
        Organize workshops and seminars to broaden developers' knowledge and skills.
        </li>
        <li className="flex items-center font-normal text-black-700">
        <span className="w-3 h-3 bg-blue-800 rounded-full mr-3"></span>
        Expand access to resources and tools necessary for skill development in software.
        </li>
        </ul>
          </div>
          </div>
        </div>
    </section>     
    )
}

export default Main;