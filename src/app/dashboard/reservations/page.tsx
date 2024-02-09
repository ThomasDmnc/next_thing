"use client"
import { getReservations } from '../../lib/actions';
import { Reservation } from '../../lib/definitions';
import { useEffect, useState } from 'react';

export default function Reservations() {
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {
        getReservations().then(setReservations);
        console.log(reservations)
    }, [reservations])

    return (

        <main className="flex min-h-screen flex-col items-center py-8 md:py-12 lg:py-12">
            <div className='flex flex-row w-full items-center max-w-6xl h-full px-4 mx-auto'>
                <h1 className='text-4xl font-bold text-blue-600'>Manage the Reservations</h1>
            </div>

            <div>
                <h2 className='text-2xl font-bold text-blue-600'>Reservations</h2>
                <ul>
                    {reservations.map((reservation: Reservation) => (
                        <li key={reservation.id}>
                            <p>{reservation.name}</p>
                            <p>{reservation.email}</p>
                            <p>{reservation.phone}</p>
                            <p>{reservation.date}</p>
                            <p>{reservation.time}</p>
                            <p>{reservation.guests}</p>
                            <p>{reservation.message}</p>
                        </li>
                    ))}
                </ul> 
            </div>
 
        </main>
    )
}
