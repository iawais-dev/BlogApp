import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
function Footer() {
  return (
    <section className="relative  py-10 lg:w-screen lg:h-screen bg-orange-400">
    <div className="relative overflow-hidden z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
            <div className="w-screen p-6 md:w-1/2 lg:w-5/12">
                <div className="flex h-full flex-col justify-between">
                    <div className="mb-4 inline-flex items-center">
                        <Logo width="100px" />
                    </div>
                    <div>
                        <p className="text-sm w-44 text-black">
                            &copy; Copyright 2024. All Rights Reserved by Sleeyar.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-black">
                        Company
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-white hover:text-gray-700"
                                to="/"
                            >
                                Features
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-white hover:text-gray-700"
                                to="/"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-white hover:text-gray-700"
                                to="/"
                            >
                                Affiliate Program
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium text-white hover:text-gray-700"
                                to="/"
                            >
                                Press Kit
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-black">
                        Support
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-white hover:text-gray-700"
                                to="/"
                            >
                                Account
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-white hover:text-gray-700"
                                to="/"
                            >
                                Help
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-white hover:text-gray-700"
                                to="/"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium text-white hover:text-gray-700"
                                to="/"
                            >
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full  p-6 md:w-1/2 lg:w-3/12">
                <div className="h-full pb-10">
                    <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-black">
                        Legals
                    </h3>
                    <ul className='mb-10'>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-white hover:text-gray-700"
                                to="/"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-white hover:text-gray-700"
                                to="/"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium text-white hover:text-gray-700"
                                to="/"
                            >
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Footer