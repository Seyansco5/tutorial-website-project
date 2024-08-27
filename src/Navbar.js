import React from "react";
import {Menu,MenuButton,MenuItem, MenuItems,Button} from '@headlessui/react';
import { ChevronDownIcon} from "@heroicons/react/16/solid";
import DarkModeToggler from "./DarkModeToggler";
import "./App.css";

function Navbar() {
    return (
        <header NavbarclassName="sticky top-0 z-50 bg-white shadow-md">
            <nav className="navbar navbar-expand-xl py-4">
                <div className="container mx-auto flex items-center justify-between px-4">
                <a className="flex items-left" href="index.html">
                    <img src= "/echelonlogo.png" alt="logo"/>
                </a>
                <h3 className="flex text-black-900 text-2xl -mr-30">Echelon Programming Academy</h3>
                <div className="flex px-80">
                    <ul className="flex space-x-2">
                        <li className="flex text-left">
                        <Menu as="div" className="relative inline-block text-left -ml-50">
                        <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-900 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-300">
                                Contact
                                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white-400"/>
                            </MenuButton>
                        </div>
                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-blue-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                        <div className="py-1">
                        <MenuItem>
                        <a href="#"
                            className="block px-4 py-2 text-sm text-center text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Where we are located
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#"
                            className="block px-4 py-2 text-sm text-center text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Email Correspondence
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#"
                            className="block px-4 py-2 text-sm text-center text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Official Telephone Lines
                            </a>
                        </MenuItem>
                        </div>
                        </MenuItems>
                        </Menu>
                        <Menu as="div" className="relative inline-block text-left -ml-60">
                        <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-900 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-300">
                                Tutorials
                                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white-400"/>
                            </MenuButton>
                        </div>
                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-blue-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                        <div className="py-1">
                        <MenuItem>
                        <a href="#"
                            className="block px-4 py-2 text-sm text-center text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            HTML and CSS
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#"
                            className="block px-4 py-2 text-sm text-center text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            JavaScript
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#"
                            className="block px-4 py-2 text-sm text-center text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            React and VueJS
                            </a>
                        </MenuItem>
                        </div>
                        </MenuItems>
                        </Menu>
                        <Menu as="div" className="relative inline-block text-left -ml-60">
                        <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-900 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-300">
                                About
                                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white-400"/>
                            </MenuButton>
                        </div>
                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-blue-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                        <div className="py-1">
                        <MenuItem>
                        <a href="#"
                            className="block px-4 py-2 text-sm text-center text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Core Values
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#"
                            className="block px-4 py-2 text-sm text-center text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Our Team
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#"
                            className="block px-4 py-2 text-sm text-center text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            What we do
                            </a>
                        </MenuItem>
                        </div>
                        </MenuItems>
                        </Menu>
                        </li>
                        <div className="button px-10">
                            <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white -mr-40">
                                Login
                            </Button>
                        
                            <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white -mr-80">
                                Sign Up
                            </Button>
                        </div>
                    </ul>         
                </div>
                <div className="flex justify-end mr-10">
                    <DarkModeToggler />
                </div>
             </div>
            </nav>
        </header>
    )
}

export default Navbar;