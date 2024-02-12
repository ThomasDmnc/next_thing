'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';    
import { redirect } from 'next/navigation'
import { sql } from '@vercel/postgres';
import { signIn } from '../../../auth';
import { AuthError } from 'next-auth';
import { Reservation } from './definitions';
import { QueryResult } from 'pg';

const ReservationForm = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10}$/),
  date: z.string(),
  time: z.string().regex(/^\d{2}:\d{2}$/),
  guests: z.number(),
  message: z.string(),
});


export async function createReservation(formData: FormData) {
    const { name, email, phone, date, time, guests, message } = ReservationForm.parse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: formData.get('time'),
        guests: Number(formData.get('guests')),
        message: formData.get('message'),
    });
    console.log({ name, email, phone, date, time, guests, message })

    try {
        await sql `
            INSERT INTO reservations (name, email, phone, date, time, guests, message)
            VALUES (${name}, ${email}, ${phone}, ${date}, ${time}, ${guests}, ${message})
        `
        console.log('Reservation created')
    } catch (error) {  
        console.log(error)
    }
    revalidatePath('/reservations')
    redirect('/')

}


export async function getReservations(): Promise<Reservation[]> {
  try {
    const result: QueryResult = await sql `SELECT * FROM reservations`
    return result.rows as Reservation[]; 
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getReservation(id: string): Promise<Reservation | null> {
  try {
    const result: QueryResult = await sql `SELECT * FROM reservations WHERE id = ${id}`
    return result.rows[0] as Reservation;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function modifyReservation(id: string, formData: FormData){
  console.log("back", formData)

  const { name, email, phone, date, time, guests, message } = ReservationForm.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    date: formData.get('date'),
    time: formData.get('time'),
    guests: Number(formData.get('guests')),
    message: formData.get('message'),
  });
    console.log({ name, email, phone, date, time, guests, message })
    console.log(id)

  try {
      await sql `
        UPDATE reservations
        SET NAME = ${name}, EMAIL = ${email}, PHONE = ${phone}, DATE = ${date}, TIME = ${time}, GUESTS = ${guests}, MESSAGE = ${message}
        WHERE id = ${id}
      `;
  } catch (error){
    console.log(error)
  }
  revalidatePath('/dashboard/reservations')
  redirect('/dashboard/reservations')
}


export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }