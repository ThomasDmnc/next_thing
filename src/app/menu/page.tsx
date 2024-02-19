'use client'
import { Navbar } from '../ui/navbar';
import { MenuItem } from '../lib/definitions';
import { getMenuItems } from '../lib/actions';
import { useEffect, useState } from 'react';

export default function Menu() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);;

    useEffect(() => {
        getMenuItems().then(setMenuItems);
    },[]);
    console.log(menuItems)
    return (
        <>
        <Navbar />
            <main className="flex min-h-screen flex-col items-center p-24">
            <div className='flex flex-row w-full items-start max-w-6xl h-full px-4 mx-auto'>
                    <h1 className='text-4xl font-bold text-blue-600'>Our Menu at Next Restaurant:</h1>
                </div>

            
            </main>
        </>
    )
}
