import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import Navbar from '@/Layouts/Navbar';
import { useRef } from 'react';
import { useState } from 'react';




export default function Dashboard({ notifs }) {

    return (
        <div>
            <Head title="Dashboard" />
            <Navbar />
            <section className="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
                <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg">
                        <div className="justify-items-end justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <Link href={route('dashboard.store')} type="button" className="flex items-center justify-center text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                    <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                    </svg>
                                    New Announcement
                                </Link>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Title</th>
                                        <th scope="col" className="px-4 py-3">Context</th>
                                        {/* <th scope="col" className="px-4 py-3">Date Created</th> */}
                                        <th scope="col" className="px-4 py-3">Expiration</th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {notifs.map((notif) => (

                                        <tr className="border-b dark:border-gray-700" key={notif.id}>
                                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white overflow-clip">{notif.title}</th>
                                            <td className="px-4 py-3 overflow-clip">{notif.context}</td>
                                            {/* <td className="px-4 py-3">{notif.created_at}</td> */}
                                            <td className="px-4 py-3">{notif.expired_at}</td>
                                            <td className="px-4 py-3 flex items-center justify-end">
                                                <button id={notif.id} data-dropdown-toggle={'btn' + notif.id} className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    </svg>
                                                </button>
                                                <div id={'btn' + notif.id} className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                    <div className="py-1 text-sm text-gray-700 hover:bg-gray-100">
                                                        <Link as='button' href={route('dashboard.edit', { id: notif.id })} method="GET" className="block py-2 px-4 "
                                                        >Edit</Link>
                                                    </div>
                                                    <div className="py-1 dark:hover:text-white hover:bg-gray-100">
                                                        <Link href={route('dashboard.destroy', { id: notif.id })} method="DELETE" as='button' className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 ">Delete</Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );


    // const { data, setData, post, processing, errors } = useForm({
    //     title: '',
    //     context: '',
    // })

    // function submit(e) {
    //     e.preventDefault()
    //     post('/dashboard/store')
    // }
    // return (
    //     <AuthenticatedLayout
    //         user={auth.user}
    //         header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
    //     >
    //         <Head title="Dashboard" />

    //         <div className="py-12">
    //             <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
    //                 <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
    //                     <form onSubmit={submit}>
    //                         <div className="mb-6">
    //                             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    //                             <input type='text' placeholder='title' value={data.title} onChange={e => setData('title', e.target.value)}></input>
    //                             {errors.title && <div>{errors.title}</div>}
    //                             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label>
    //                             <input type='text' placeholder='context' value={data.context} onChange={e => setData('context', e.target.value)}></input>
    //                             {errors.context && <div>{errors.context}</div>}
    //                         </div>
    //                         <button type='submit' className='p-3 text-gray-200 bg-blue-600 rounded-xl' disabled={processing}>Submit</button>
    //                     </form>

    //                 </div>
    //             </div>
    //         </div>
    //     </AuthenticatedLayout>
    // );
}
