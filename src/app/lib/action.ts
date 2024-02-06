'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';    
import { redirect } from 'next/navigation'
import { sql } from '@vercel/postgres';

const ReservationForm = z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string().regex(/^\d{10}$/),
        date: z.string(),
        time: z.string().regex(/^\d{2}:\d{2}$/),
        guest: z.number(),
        message: z.string(),
    });

export async function createReservation(formData: FormData) {
    console.log(FormData)
    const { name, email, phone, date, time, guest, message } = ReservationForm.parse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: formData.get('time'),
        guest: Number(formData.get('guest')),
        message: formData.get('message'),
    });
    console.log({ name, email, phone, date, time, guest, message })
    await sql `
        INSERT INTO reservations VALUES ${name}, ${email}, ${phone}, ${date}, ${time}, ${guest}, ${message}
    `
    console.log('Reservation created')
    redirect('/')
}