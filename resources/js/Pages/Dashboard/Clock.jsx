import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { router } from "@inertiajs/react";


export default function Clock() {


    function displayAnnouncement() {
        setTimeout(() => {
            router.visit(route('announcement.index'));
        }, 900000);
    };

    useEffect(() => {
        initFlowbite();
        displayAnnouncement();

    });

    return (
        <>
            <div className="min-h-screen bg-white">
                <div className="flex items-center justify-center w-full py-5">
                    <img
                        src="./storage/ccklogo.gif"
                        className="w-24 h-auto bg-transparent rounded-full"
                        alt="cck-logo"
                    />
                    <div className="w-full max-w-md text-center text-wrap">
                        <span className="text-4xl font-semibold text-gray-800 uppercase text-wrap"
                        >CCK City Network Inc.
                            <span className="font-sans text-3xl">World Clock</span>
                        </span>
                    </div>
                </div>
                <div className="grid items-center grid-flow-col px-auto">
                    <div className="flex flex-col items-center w-full gap-10">
                        <span className="text-5xl font-semibold text-gray-800">PHILIPPINES</span>
                        <iframe
                            className="mb-6 rounded-full shadow-2xl shadow-black"
                            src="https://free.timeanddate.com/clock/i9bbc2qc/n145/szw700/szh700/hoc171717/hfce5e7eb/cf100/hgr0/fan3/fas20/facff0e4e4e7000/fdi70/mqc000/mqs3/mql13/mqw4/mqd94/mhc000/mhl13/mhw4/mhd94/mmc111/mml5/mmw1/mmd94/hhs1/hhb18/hms1/hml80/hmb18/hmr1/hss1/hsl90/hsr3"
                            frameBorder="0"
                            width="700"
                            height="700"
                        ></iframe>

                        <iframe
                            src="https://free.timeanddate.com/clock/i9bbc2qc/n145/fn6/fs48/fc1f2937/tct/pct/ftb/tt1"
                            frameBorder="0"
                            width="739"
                            height="58"
                            allowtransparency="true"
                        ></iframe>
                    </div>
                    <div className="flex flex-col items-center w-full gap-10">
                        <span className="text-5xl font-semibold text-gray-800">JAPAN</span>
                        <iframe
                            className="mb-6 rounded-full shadow-2xl shadow-black"
                            src="https://free.timeanddate.com/clock/i9bbc2qc/n248/szw700/szh700/hoc171717/hfce5e7eb/cf100/hgr0/fan3/fas20/facff0e4e4e7000/fdi70/mqc000/mqs3/mql13/mqw4/mqd94/mhc000/mhl13/mhw4/mhd94/mmc111/mml5/mmw1/mmd94/hhs1/hhb18/hms1/hml80/hmb18/hmr1/hss1/hsl90/hsr3"
                            frameBorder="0"
                            width="700"
                            height="700"
                        ></iframe>

                        <iframe
                            src="https://free.timeanddate.com/clock/i9bbc2qc/n248/fn6/fs48/fc1f2937/tct/pct/ftb/tt1"
                            frameBorder="0"
                            width="739"
                            height="58"
                            allowtransparency="true"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}