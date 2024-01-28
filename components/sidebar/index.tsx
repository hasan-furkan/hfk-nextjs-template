'use client'
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import navigation from '../../navigation/sidebar';
import {checkPermissions} from '../../utils/checkPermission';
import Link from 'next/link'
import Image from "next/image";

function Sidebar() {
    const {t} = useTranslation();
    const userRole = 'user';

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeChildIndex, setActiveChildIndex] = useState(0);

    const handleItemClick = (e) => {
        setActiveChildIndex(e);
    };

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
    }, [activeIndex, activeChildIndex]);

    return (
        <ul className='mt-4 bg-white'>
            {navigation.map((d, i) => (
                <li key={i}>
                    <div
                        role='presentation'
                        className={`${activeIndex === i ? 'bg-purple-400 text-light-500' : 'text-black-500 hover:bg-purple-300 dark:text-light-500'} flex items-center justify-between hover:bg-gray-200 cursor-pointer m-2 py-2 px-4 rounded-2xl`}
                        onClick={() => handleClick(i)}
                    >
                        <div className='flex items-center'>

                                <Image src={d.icon} alt={d.id} width={24} height={24} />
                            {d.navLink && (
                                <Link href={d.navLink} className='ml-2'>
                                    <span>{t(`${d.title}`)}</span>
                                </Link>
                            )}
                            {!d.navLink && <span className='ml-2'>{t(`${d.title}`)}</span>}
                        </div>
                        {d.children && (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d={activeIndex === i ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
                                />
                            </svg>
                        )}
                    </div>
                    {d.children && activeIndex === i && (
                        <ul className='pl-8'>
                            {d.children
                                .filter((child) => checkPermissions(userRole, child.permission))
                                .map((child, childIndex) => (
                                    <li key={childIndex}>
                                        <Link
                                            href={child.navLink}
                                            className={`${activeChildIndex === childIndex ? 'bg-purple-400 text-light-500' : 'text-gray-800 hover:bg-purple-300 dark:text-light-500'} rounded-2xl m-2 py-2 px-5 block`}
                                            onClick={() => handleItemClick(childIndex)}
                                        >
                                            <div className='flex justify-between'>
                                                   <Image src={child.icon} alt={child.id} width={24} height={24} />
                                                <span>{t(`${child.title}`)}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Sidebar;
