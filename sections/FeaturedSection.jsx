import React from 'react'
import Link from 'next/link'
import { MdWallpaper, MdOutlineLocalLibrary, MdEventAvailable, MdOutlinePersonPin } from 'react-icons/md'
import { AiOutlineFileUnknown, AiOutlineCode } from 'react-icons/ai'
import { WiStars } from 'react-icons/wi'

const FeaturedSection = () => {
  return (
    <section className="bg-gray-950/70 mt-12">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="flex mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Top features of our website <WiStars className="text-green-400" size={50} />
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here is the quick overview of all the features that our website provides.</p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-2">
            
            <Link href='/cs-x-resources/pyqp'>
            <div
            className='hover:bg-gray-900 hover:border-[1px] hover:border-gray-600 p-4 rounded-lg  hover:-translate-y-2 transition-transform duration-100'>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-pink-800">
                    <AiOutlineFileUnknown size={24} color='white' />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">CSxPYQPs</h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.
                </p>
            </div>
            </Link>
            
            <Link href='/cs-x-resources/library'>
            <div
            className='hover:bg-gray-900 hover:border-[1px] hover:border-gray-600 p-4 rounded-lg  hover:-translate-y-2 transition-transform duration-100'>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-pink-800">
                    <MdOutlineLocalLibrary size={24} color='white' />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">CSxLibrary</h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.
                </p>
            </div>
            </Link>

            <Link href='/cs-x-resources/practicals'>
            <div 
            className='hover:bg-gray-900 hover:border-[1px] hover:border-gray-600 p-4 rounded-lg  hover:-translate-y-2 transition-transform duration-100'>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-pink-800">
                    <AiOutlineCode size={24} color='white' />              
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">CSxPracticals</h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.
                </p>
            </div>
            </Link>

            <Link href='/gallery'>
            <div
            className='hover:bg-gray-900 hover:border-[1px] hover:border-gray-600 p-4 rounded-lg  hover:-translate-y-2 transition-transform duration-100'>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-pink-800">
                    <MdWallpaper size={24} color='white' />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">CSxGallery</h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.
                </p>
            </div>
            </Link>

            <Link href='/eventblog'>
            <div  
            className='hover:bg-gray-900 hover:border-[1px] hover:border-gray-600 p-4 rounded-lg  hover:-translate-y-2 transition-transform duration-100'>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-pink-800">
                    <MdEventAvailable size={24} color='white' />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">CSxEventBlog</h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.
                </p>
            </div>
            </Link>

            <Link href='/alumni'>
            <div 
            className='hover:bg-gray-900 hover:border-[1px] hover:border-gray-600 p-4 rounded-lg  hover:-translate-y-2 transition-transform duration-100'>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-pink-800">
                    <MdOutlinePersonPin size={24} color='white' />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">CSxAlumni</h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.
                </p>
            </div>
            </Link>

        </div>
    </div>
  </section>
  )
}

export default FeaturedSection
