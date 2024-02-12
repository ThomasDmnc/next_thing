'use client';
import EditForm from '../../../../ui/reservations/edit-form'
import { getReservation } from '../../../../lib/actions'
import { useEffect, useState } from 'react';
import { Reservation } from '@/app/lib/definitions';

export default function EditReservation({ params }: { params: { id: string }}){ 
    const id = params.id;
    const [reservation, setReservation] = useState<Reservation | null>(null); 
    
    useEffect(()=> {
        getReservation(id).then(setReservation)
    }, [id])

    return (
        <>
            <main className="flex min-h-screen flex-col w-screen items-start py-8 md:py-12 lg:py-12 px-4 md:px-12">
            <div className='flex flex-row w-full items-start max-w-6xl h-full'>
                <h1 className='text-4xl font-bold text-blue-600'>Edit the reservation</h1>
            </div>
            
            {   reservation &&
                <EditForm reservation={reservation} />
            }
            </main>
        </>
    )    
}
