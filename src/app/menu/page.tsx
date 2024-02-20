'use client'
import { Navbar } from '../ui/navbar';
import { MenuItem } from '../lib/definitions';
import { getMenuItems } from '../lib/actions';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

export default function Menu() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);;

    useEffect(() => {
        getMenuItems().then(setMenuItems);
    },[]);

    function filterMenuItems(category: string) {
        const filteredMenuItems = menuItems.filter((menuItem) => menuItem.category === category && menuItem.availability === true);
        return filteredMenuItems;
    }

    return (
        <>
        <Navbar />
            <main className="flex min-h-screen flex-col items-center p-8 md:p-12 lg:p-24">
            <div className='flex flex-row w-full items-start max-w-6xl h-full px-4 mx-auto'>
                    <h1 className='text-4xl font-bold text-blue-600'>Our Menu at Next Restaurant:</h1>
                </div>

            <div className='flex flex-col items-start w-full max-w-6xl px-4'>
                <div className={clsx(filterMenuItems('Appetizer').length === 0 && 'hidden', 'w-full pt-4')}>
                    <h2 className='font-bold text-blue-600 text-lg py-4 px-2'>Our Appetizers</h2>
                    <div className='flex flex-col w-full'>
                        {filterMenuItems('Appetizer').length > 0 && filterMenuItems('Appetizer').map((item) => {
                            return (
                                <div className='flex flex-row px-8 justify-around py-2' key={item.id}>
                                    <div className='flex flex-col grow'>
                                        <p className='font-bold tracking-tight text-green-700'>{item.name}</p>
                                        <p className='text-sm italic text-gray-500'>{item.description}</p>
                                    </div>
                                    <p className='font-bold tracking-tight text-green-700'>{item.price}€</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={clsx(filterMenuItems('Entree').length === 0 && 'hidden', 'w-full pt-4')}>
                    <h2 className='font-bold text-blue-600 text-lg py-4 px-2' >Our Entrées</h2>
                    <div className='flex flex-col w-full'>
                        {filterMenuItems('Entree').length > 0 && filterMenuItems('Entree').map((item) => {
                            return (
                                <div className='flex flex-row px-8 justify-around py-2' key={item.id}>
                                    <div className='flex flex-col grow'>
                                        <p className='font-bold tracking-tight text-green-700'>{item.name}</p>
                                        <p className='text-sm italic text-gray-500'>{item.description}</p>
                                    </div>
                                    <p className='font-bold tracking-tight text-green-700'>{item.price}€</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className={clsx(filterMenuItems('Main').length === 0 && 'hidden', 'w-full pt-4')}>
                    <h2 className='font-bold text-blue-600 text-lg py-4 px-2' >Our Mains</h2>
                    <div className='flex flex-col w-full'>
                        {filterMenuItems('Main').length > 0 && filterMenuItems('Main').map((item) => {
                            return (
                                <div className='flex flex-row px-8 justify-around py-2' key={item.id}>
                                    <div className='flex flex-col grow'>
                                        <p className='font-bold tracking-tight text-green-700'>{item.name}</p>
                                        <p className='text-sm italic text-gray-500'>{item.description}</p>
                                    </div>
                                    <p className='font-bold tracking-tight text-green-700'>{item.price}€</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={clsx(filterMenuItems('Side').length === 0 && 'hidden', 'w-full pt-4')}>
                    <h2 className='font-bold text-blue-600 text-lg py-4 px-2' >Our Sides</h2>
                    <div className='flex flex-col w-full'>
                        {filterMenuItems('Side').length > 0 && filterMenuItems('Side').map((item) => {
                            return (
                                <div className='flex flex-row px-8 justify-around py-2' key={item.id}>
                                    <div className='flex flex-col grow'>
                                        <p className='font-bold tracking-tight text-green-700'>{item.name}</p>
                                        <p className='text-sm italic text-gray-500'>{item.description}</p>
                                    </div>
                                    <p className='font-bold tracking-tight text-green-700'>{item.price}€</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={clsx(filterMenuItems('Cheese').length === 0 && 'hidden', 'w-full pt-4')}>
                    <h2 className='font-bold text-blue-600 text-lg py-4 px-2' >Our Cheeses</h2>
                                        <div className='flex flex-col w-full'>
                        {filterMenuItems('Cheese').length > 0 && filterMenuItems('Cheese').map((item) => {
                            return (
                                <div className='flex flex-row px-8 justify-around py-2' key={item.id}>
                                    <div className='flex flex-col grow'>
                                        <p className='font-bold tracking-tight text-green-700'>{item.name}</p>
                                        <p className='text-sm italic text-gray-500'>{item.description}</p>
                                    </div>
                                    <p className='font-bold tracking-tight text-green-700'>{item.price}€</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={clsx(filterMenuItems('Dessert').length === 0 && 'hidden', 'w-full pt-4')}>
                    <h2 className='font-bold text-blue-600 text-lg py-4 px-2' >Our Desserts</h2>
                                        <div className='flex flex-col w-full'>
                        {filterMenuItems('Dessert').length > 0 && filterMenuItems('Dessert').map((item) => {
                            return (
                                <div className='flex flex-row px-8 justify-around py-2' key={item.id}>
                                    <div className='flex flex-col grow'>
                                        <p className='font-bold tracking-tight text-green-700'>{item.name}</p>
                                        <p className='text-sm italic text-gray-500'>{item.description}</p>
                                    </div>
                                    <p className='font-bold tracking-tight text-green-700'>{item.price}€</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={clsx(filterMenuItems('Beverage').length === 0 && 'hidden', 'w-full pt-4')}>
                    <h2 className='font-bold text-blue-600 text-lg py-4 px-2' >Our Beverages</h2>
                                        <div className='flex flex-col w-full'>
                        {filterMenuItems('Beverage').length > 0 && filterMenuItems('Beverage').map((item) => {
                            return (
                                <div className='flex flex-row px-8 justify-around py-2' key={item.id}>
                                    <div className='flex flex-col grow'>
                                        <p className='font-bold tracking-tight text-green-700'>{item.name}</p>
                                        <p className='text-sm italic text-gray-500'>{item.description}</p>
                                    </div>
                                    <p className='font-bold tracking-tight text-green-700'>{item.price}€</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            </main>
        </>
    )
}
