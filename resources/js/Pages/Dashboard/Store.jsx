import Navbar from '@/Layouts/Navbar';
import React from "react";
import { Link, useForm, Head } from "@inertiajs/react";


export default function Store() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        context: '',
        date: '',
        // time: '',

    })

    function submit(e) {
        e.preventDefault();
        post('/dashboard/save');
    }

    return (
        <div>
            <Head title="Dashboard" />
            <Navbar />
            <section className="bg-white dark:bg-gray-900 mt-5">
                <div className="py-8 lg:py-8 px-10 mx-auto max-w-screen-xl rounded-lg shadow-xl ">
                    <div>
                        <Link href={route('dashboard.index')} className="flex text-sm font-medium text-center text-blue-600 hover:underline dark:hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
                            </svg>
                            Return to Dashboard
                        </Link>
                        <h2 className="mb-4 mt-5 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">New Announcement</h2>
                    </div>
                    <form onSubmit={submit} className="space-y-8">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                            <input onChange={e => setData('title', e.target.value)} type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Input Title" required></input>
                            {errors.title && <div className="text-red-600">{errors.title}</div>}
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                            <textarea onChange={e => setData('context', e.target.value)} type='text' id="description" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Input Description"></textarea>
                            {errors.context && <div className="text-red-600">{errors.context}</div>}
                        </div>

                        <div className='flex'>
                            <div>
                                <div className='mb-3'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select Expiration Date</label>
                                </div>
                                <div className="relative max-w-sm mr-8">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input type="date" onChange={e => setData('date', e.target.value)} id='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"></input>
                                </div>
                            </div>
                            {/* <div>
                                <div className='mb-3'>
                                    <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select Time</label>
                                </div>
                                <div className="relative max-w-sm">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input type="time" onChange={e => setData('time', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"></input>
                                </div>
                            </div> */}
                        </div>

                        <button disabled={processing} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Announcement</button>
                    </form>
                </div>
            </section>
        </div>
    );
}