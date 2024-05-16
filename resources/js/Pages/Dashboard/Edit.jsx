import Navbar from '@/Layouts/Navbar';
import React from "react";
import { useForm, usePage, Head, Link } from "@inertiajs/react";
import toast, { Toaster } from 'react-hot-toast';



export default function Edit({ item, date }) {
    const announcement = usePage().props;


    const { data, setData, patch, processing, errors } = useForm({
        title: announcement.item.title,
        context: announcement.item.context,
        date: announcement.date,
        // time: announcement.time,

    })

    function submit(e) {
        e.preventDefault();

        patch(route('dashboard.update', {
            id: announcement.item.id
        }));
        // toast.success('Success! Announcement has been updated.');

        if (e) {
            toast.success('Success! Announcement has been updated.');
        } else {
            toast.error('Error! Announcement update failed.');
        }

    }
    return (
        <div>
            <Head title="Dashboard" />
            <Navbar />
            <section className="mt-5 bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-10 py-8 mx-auto rounded-lg shadow-xl lg:py-16 ">
                    <div>
                        <Toaster />
                        <div className='grid grid-cols-2'>
                            <Link href={route('dashboard.index')} className="flex text-sm font-medium text-center text-blue-600 hover:underline dark:hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                                </svg>
                                Return to Dashboard
                            </Link>
                            <Link href={route('dashboard.destroy', { id: announcement.item.id })} method="DELETE" as='button' className="flex text-sm font-medium text-center text-red-600 justify-self-end hover:underline dark:hover:underline">
                                Delete
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                        <h2 className="mt-5 mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">Update Announcement</h2>
                    </div>
                    <form onSubmit={submit} className="space-y-8">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                            <input defaultValue={item.title} onChange={(e) => setData('title', e.target.value)} id='title' type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Input Title" required></input>
                            {errors.title && <div className="text-red-600">{errors.title}</div>}
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                            <textarea defaultValue={item.context} onChange={(e) => setData('context', e.target.value)} id='context' type='text' rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Input Description"></textarea>
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
                                    <input type="date" defaultValue={date} onChange={(e) => setData('date', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"></input>
                                    {errors.date && <div className="text-red-600">{errors.date}</div>}

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
                                    <input type="time" defaultValue={time} onChange={(e) => setData('time', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"></input>
                                    {errors.time && <div className="text-red-600">{errors.time}</div>}

                                </div>
                            </div> */}
                        </div>
                        <button disabled={processing} type="submit" className="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </form>
                </div>
            </section>
        </div>
    );
}