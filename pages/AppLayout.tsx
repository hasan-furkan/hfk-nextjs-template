'use client'
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import MyHeader from '../components/navbar';
import MySidebar from '../components/sidebar';

interface Props {
    children: React.ReactNode;
}
function AppLayout({children}: Props) {
    const appClass = useSelector((state) => state.theme.theme);
    const [isDarkMode, setIsDarkMode] = useState(appClass === 'dark');

    const [isSidebar, setIsSidebar] = useState(true);
    return (
        <div className={appClass}>
            <MyHeader setIsSidebar={setIsSidebar} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
                <div className="flex">
                    <div className='w-[17%] bg-light-300 dark:bg-black-300 h-screen overflow-y-auto scroll-smooth'>
                        <MySidebar isSidebar={isSidebar} />
                    </div>
                    <div className='flex-1 p-4 rounded-bg-lg bg-light-300 dark:bg-black-300'>
                        {children}
                    </div>
                </div>
            </div>
    );
}
export default AppLayout;
