"use client";
import { getReservations, deleteReservation } from '../../lib/actions';
import { Reservation } from '../../lib/definitions';
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function Reservations() {
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {
        getReservations().then(setReservations);
    }, [reservations])

    return (

        <main className="flex min-h-screen flex-col w-fit items-start py-8 md:py-12 lg:py-12 px-4 md:px-12">
            <div className='flex flex-row justify-center items-start max-w-6xl'>
                <h1 className='text-4xl font-bold text-blue-600'>Manage the Reservations</h1>
            </div>

            <div className='my-8'>
                <Link
                href='/dashboard/reservations/create'>
                    <button className='bg-blue-600 rounded p-4 font-bold text-white hover:bg-blue-900'>
                        Create a new Reservation
                    </button>
                </Link>
            </div>

            <div className='grow'>
                <h2 className='text-2xl font-bold text-blue-600 my-4'>Reservations</h2>
                <div className='grid grid-cols-4 gap-12'>
                    {reservations.map((reservation: Reservation) => (
                        <div className='w-full h-full flex flex-col border-2 items-center justify-center p-2' key={reservation.id}>
                            <p>Reservation made by {reservation.name}</p>
                            <p>Contact information:</p>
                            <p>{reservation.email}</p>
                            <p>{reservation.phone}</p>
                            <p>Reservation details:</p>                         
                            <p>{reservation.date}</p>
                            <p>{reservation.time}</p>
                            <p>{reservation.guests}</p>
                            <p>{reservation.message}</p>
                            <div className='flex flex-row p-4 justify-between w-full'>
                                <Link
                                    href={`/dashboard/reservations/${reservation.id}/edit`}
                                >
                                    <button className='bg-blue-600 rounded p-2 font-bold text-white text-sm hover:bg-blue-900 mr-2'>
                                            Edit the reservation
                                    </button>
                                </Link>
                                <form action={deleteReservation.bind(null, reservation.id)}>
                                    <button className='bg-red-500 rounded p-2 font-bold text-white text-sm hover:bg-red-600 ml-2'>
                                        Delete the reservation
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
 
        </main>
    )
}
