
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import tone from "/resources/images/notification.mp3";


export default function Welcome(notifs) {
    // console.log(notifs);
    // const [data, setData] = useState(notifs.notifs);

    function displayDashboard() {
        setTimeout(() => {
            router.visit(route('announcement.clock'));
        }, 900000);
    };

    const audio = new Audio(tone);

    Echo.channel('channel')
        .listen('AnnouncementEvent', (e) => {
            // 
            //     setData([...data, {
            //         id: e.data.id,
            //         title: e.data.title,
            //         context: e.data.context,
            //     }]);
            audio.play();
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        });

    useEffect(() => {
        initFlowbite();
        displayDashboard();

    });

    return (
        <>
            <Head title="Announcement" />
            <div id="default-carousel" className="relative w-full h-screen" data-carousel="slide" data-carousel-interval="10000">
                <div className="relative h-screen overflow-hidden ">
                    {notifs.notifs.map((item, index) =>
                        <div className="hidden transition duration-700 ease-out " data-carousel-item key={item.id} >
                            <section className=" bg-zinc-800" >
                                <div className='flex flex-col h-screen px-10 text-7xl gap-auto justify-evenly'>
                                    <span className='font-bold text-center text-gray-200'>
                                        {item.title}
                                    </span>
                                    <span className='text-6xl text-justify text-gray-200'>
                                        {item.context}
                                    </span>
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </div>

        </>

    );
}

