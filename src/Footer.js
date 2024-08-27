import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube,} from "react-icons/fa";
import "./App.css";

function Footer() {
return (
 <div className="container mx-4 bg-blue-600">
    <div className="flex flex-col lg:flex-row justify-between">
    <div className="lg:w-1/4">
        <a href="index.html" className="inline-block mb-4">
        <img src= "/echelonlogo.png" alt="logo"/>
        </a>
        <p className="mt-2 mb-2 text-black-900 text-start px-2">Echelon Programming Academy-Innovation and Technology Institution.</p>
    </div>
    <div className="lg:w-3/4 xl:w-2/3">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
            <div>
                <h6 className="mb-2 md:mb-4 text-lg text-black-900 font-bold">Quick links</h6>
                <ul className="flex flex-col space-y-2">
                    <li><a className="text-black-600 font-bold hover:text-green-900" href="">About us</a></li>
                    <li><a className="text-black-600 font-bold hover:text-green-800" href="">Contact us</a></li>
                    <li><a className="text-black-600 font-bold hover:text-green-800" href="">Careers</a></li>
                    <li><a className="text-black-600 font-bold hover:text-green-800" href="">Become a Partner</a></li>
                </ul>
            </div>
            <div>
                <h6 className="mb-2 md:mb-4 text-lg text-black-900 font-bold">Community</h6>
                <ul className="flex flex-col space-y-2">
                    <li><a className="text-black-600 font-bold hover:text-green-900" href="">Support</a></li>
                    <li><a className="text-black-600 font-bold hover:text-green-800" href="">Faqs</a></li>
                    <li><a className="text-black-600 font-bold hover:text-green-800" href="">News and Blogs</a></li>
                    <li><a className="text-black-600 font-bold hover:text-green-800" href="">Terms & condition</a></li>
                </ul>
            </div>
            <div>
                <h6 className="mb-2 md:mb-4 text-lg font-bold">Follow on</h6>
                <ul className="flex space-x-2 justify-center">
                    <li><a className="btn-xs btn-icon bg-black-200 p-2 rounded-full  hover:text-green-900" href=""><FaFacebookF /></a></li>
                    <li><a className="btn-xs btn-icon bg-black-200 p-2 rounded-full hover:text-green-900" href=""><FaInstagram /></a></li>
                    <li><a className="btn-xs btn-icon bg-black-200 p-2 rounded-full  hover:text-green-900" href=""><FaTwitter /></a></li>
                    <li><a className="btn-xs btn-icon bg-black-200 p-2 rounded-full hover:text-green-900" href=""><FaLinkedin /></a></li>
                    <li><a className="btn-xs btn-icon bg-black-200 p-2 rounded-full hover:text-green-900" href=""><FaYoutube /></a></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    <hr className="mt-8 mb-0 border-white-700" />
    <div className="flex flex-col md:flex-row justify-between items-center px-80 py-4">
        <div className="text-black-700">
            Copyrights &copy;2024 Echelon
        </div>
    </div>
</div>
)

}


export default Footer;