"use client"
import { getReservations } from '../../lib/actions';
import { Reservation } from '../../lib/definitions';
import { useEffect, useState } from 'react';

export default function Reservations() {
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {
        getReservations().then(setReservations);

    }, [])

    return (

        <main className="flex min-h-screen flex-col w-full items-center py-8 md:py-12 lg:py-12 px-4 md:px-12">
            <div className='flex flex-row justify-center items-start max-w-6xl'>
                <h1 className='text-4xl font-bold text-blue-600'>Manage the Reservations</h1>
            </div>

            <div className='w-full'>
                <h2 className='text-2xl font-bold text-blue-600 my-4'>Reservations</h2>
                <div className='grid grid-cols-3 gap-12 w-full'>
                    {reservations.map((reservation: Reservation) => (
                        <div className='w-full flex flex-col' key={reservation.id}>
                            <p>Reservation made by {reservation.name}</p>
                            <p>Contact information:</p>
                            <p>{reservation.email}</p>
                            <p>{reservation.phone}</p>
                            <p>Reservation details:</p>                         
                            <p>{reservation.date}</p>
                            <p>{reservation.time}</p>
                            <p>{reservation.guests}</p>
                            <p>{reservation.message}</p>
                        </div>
                    ))}
                </div> 
            </div>
 
        </main>
    )
}
