import React from 'react';
import Image from "next/image";

const SideBarComponent = () => {
    return (
        <>
            <div className="flex flex-col top-0 left-0 border-r-gray-200 border-r-2 w-64 h-screen bg-purple-400 relative">
                <div className="h-20 border-b-gray-200 border-b-2 rounded-md mt-2">
                    <div className="flex justify-around items-center">
                        <Image src="/images/logo.jpeg" alt="logo" width={64} height={64} className="ml-2 mt-2 rounded-3xl" />
                        <h1 className="text-5xl text-gray-50 font-bold mr-2 mt-2">HFK</h1>
                        <div className="absolute right-[-18px] top-7 cursor-pointer bg-purple-300 rounded-3xl p-1">
                            <Image src="/svgs/sidebarRight.svg" alt="sidebarRight" width={24} height={24} className="text-l" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col p-1 overflow-y-auto scroll-smooth">
                   <div className="text-gray-50 mt-2 rounded-3xl gap-2">
                       <div className="flex w-full ml-1 p-1 my-2 bg-purple-300 rounded-3xl">
                           <Image src="/svgs/home.svg" alt="home" width={28} height={28} className="ml-2" />
                           <h1 className="text-2xl font-bold ml-2">Home</h1>
                       </div>
                       <div className="flex w-full ml-1 p-1 my-2 bg-purple-300 rounded-3xl">
                           <Image src="/svgs/home.svg" alt="home" width={28} height={28} className="ml-2" />
                           <h1 className="text-2xl font-bold ml-2">Home</h1>
                       </div>
                   </div>
                </div>

            </div>
        </>
    )
}

export default SideBarComponent