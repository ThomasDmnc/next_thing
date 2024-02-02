'user server'
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';    
import { redirect } from 'next/navigation'

const ReservationForm = z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string().regex(/^\d{10}$/),
        date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        time: z.string().regex(/^\d{2}:\d{2}$/),
        guest: z.number().int().min(1).max(10),
        message: z.string().optional(),
    });

export async function createReservation(formData: FormData) {

}