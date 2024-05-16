
// import { useRef, useState, useEffect } from 'react';
// import { Carousel } from 'flowbite';
import { Head } from "@inertiajs/react";





export default function Welcome(notifs) {

    // console.log(notifs);
    // const [data, setData] = useState(notifs.notifs);

    Echo.channel('channel')
        .listen('AnnouncementEvent', (e) => {
            // if (e != 'refresh') {
            //     setData([...data, {
            //         id: e.data.id,
            //         title: e.data.title,
            //         context: e.data.context,
            //     }]);
            // } else { }
            window.location.reload();
        });

    return (

        //     <TableComponent data={data}/>

        <>
            <Head title="Announcement" />

            {/* <div id="default-carousel" className="relative w-full h-screen" data-carousel="slide">
                <div className="relative h-screen overflow-hidden rounded-lg md:h-screen">
                    {notifs.notifs.map((item, index) =>

                        <div className="hidden transition duration-700 ease-out" data-carousel-item key={item.id} >
                            <section className="bg-gray-100 bg-bottom bg-cover" >
                                <section className="bg-cover bg-bottom bg-[url('/resources/images/new_layout2.jpg')]" >
                                <div className='w-screen h-screen pt-20'>
                                    <div className='flex justify-center mb-10'>
                                        <h1 className='font-extrabold text-blue-700 text-9xl'>{item.title}</h1>
                                    </div>
                                    <div className='flex justify-center px-40 mt-20'>
                                        <h1 className='text-6xl font-normal '>
                                            {item.context}
                                        </h1>
                                    </div>
                                </div>
                                </section>
                            </section>
                        </div>
                    )}
                </div>
            </div> */}
            <div data-hs-carousel='{"loadingClasses": "opacity-0", "isAutoPlay": true}' className="relative">
                <div className="relative w-full h-screen overflow-hidden">
                    <div className="absolute top-0 bottom-0 flex transition-transform duration-1000 opacity-0 hs-carousel-body start-0 flex-nowrap " >

                        {notifs.notifs.map((item, index) =>
                            <div className="hs-carousel-slide" key={item.id} >
                                <section className="bg-gray-200 bg-bottom bg-cover" >
                                    <div className='w-screen h-screen pt-20'>
                                        <div className='flex justify-center mb-10'>
                                            <h1 className='font-extrabold text-blue-700 text-9xl'>{item.title}</h1>
                                        </div>
                                        <div className='flex justify-center px-40 mt-20'>
                                            <h1 className='text-6xl font-normal '>
                                                {item.context}
                                            </h1>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>

    );
}

