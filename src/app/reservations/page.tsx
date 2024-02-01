'use client'
import { Navbar } from '../ui/navbar';
import { Calendar } from "@/components/ui/calendar"

export default function Reservations() {

    return (
        <>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className='flex flex-row w-full items-start max-w-6xl h-full px-4 mx-auto sm:px-6 '>
                <h1 className='text-4xl font-bold text-blue-600'>Make a reservation at Next Restaurant</h1>
            </div>

            <Calendar />

            <form className='flex flex-col w-1/2 space-evenly'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" />
                <label htmlFor="time">Time</label>
                <input type="time" id="time" name="time" />
                <label htmlFor="guests">Guests</label>
                <input type="number" id="guests" name="guests" />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Submit</button>
            </form>

        </main>
        </>
    )
}
