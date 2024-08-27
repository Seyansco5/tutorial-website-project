import React from "react";
import "./App.css";

function Header() {
    return (
        <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-black-500 max-h-[500px] bg-black/40 flex flex-col justify-center">
        <h3 className='px-4 text-2xl sm:text-5xl md:text-3xl lg:text-4xl font-bold'>
        <span className='text-blue-600 typed'>Nurturing young talents for technological innovation</span>
        </h3>
        </div>
        <img className="w-full max-h-[500px] object-cover" src="/DOC 1.jpeg" alt="Pics" />
        </div>
        </div>
    )
}
export default Header;