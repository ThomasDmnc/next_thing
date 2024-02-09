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
            <p className="bg-primary">Edit Reservation</p>
            {   reservation &&
                <EditForm {...reservation} />
            }
        </>
    )    
}
