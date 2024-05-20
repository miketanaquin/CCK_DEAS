
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";





export default function Welcome(notifs) {

    // console.log(notifs);
    // const [data, setData] = useState(notifs.notifs);

    function displayDashboard() {
        setTimeout(() => {
            router.visit(route('announcement.clock'));
        }, 900000);
    };


    Echo.channel('channel')
        .listen('AnnouncementEvent', (e) => {
            // 
            //     setData([...data, {
            //         id: e.data.id,
            //         title: e.data.title,
            //         context: e.data.context,
            //     }]);
            window.location.reload();
        });

    useEffect(() => {
        initFlowbite();
        displayDashboard();

    });

    return (
        <>
            <Head title="Announcement" />

            <div id="default-carousel" className="relative w-full h-screen" data-carousel="slide" data-carousel-interval="10000">
                <div className="relative h-screen overflow-hidden rounded-lg md:h-screen">
                    {notifs.notifs.map((item, index) =>

                        <div className="hidden transition duration-700 ease-out " data-carousel-item key={item.id} >
                            <section className="bg-blue-900 bg-bottom bg-cover" >
                                <div className='w-screen h-screen px-10 pt-20'>
                                    <div className='flex justify-center mb-5 text-9xl text-wrap h-1/3'>
                                        <h1 className='font-extrabold text-center text-white'>{item.title}</h1>
                                    </div>
                                    <div className='flex justify-center text-wrap h-2/3'>
                                        <p className='text-6xl font-normal text-justify text-white'>
                                            {item.context}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </div>

        </>

    );
}

