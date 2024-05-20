import React from 'react';
import { Link } from '@inertiajs/react';
import logo from "/resources/images/logo.png";
import { initFlowbite } from "flowbite";
import { useEffect } from 'react';



export default function Navbar() {
    useEffect(() => {
        initFlowbite();
    });
    return (
        <nav className="bg-blue-600 border-gray-700 dark:bg-gray-900 dark:border-gray-700" >
            <div className="flex flex-wrap items-center justify-between p-4 mx-auto max-w-screen-2xl">
                <Link href={route('announcement.index')} as='button' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className='w-10 h-8' />
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col p-4 mt-4 font-medium md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href={route('dashboard.index')} as='button' className="block px-3 py-2 text-white rounded bg-white-700 md:bg-transparent md:text-white-700 md:p-0 md:dark:white-blue-500 dark:bg-white-600 md:dark:bg-transparent" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" as='button' data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full px-3 py-2 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-white-500 dark:focus:text-white dark:border-gray-200 dark:hover:bg-gray-200 md:dark:hover:bg-transparent">Profile <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button>

                            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li as='button' className=' hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                                        <Link href={route('profile.edit')} as='button' className="block px-4 py-2">Settings</Link>
                                    </li>
                                </ul>
                                <div className="py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    <Link href={route('logout')} as='button' method="post" className="block px-4 py-2 text-sm text-gray-700">Sign out</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}