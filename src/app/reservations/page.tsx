'use client'
import { Navbar } from '../ui/navbar';
import * as React from "react"
import {createReservation} from '../lib/actions'
import { DatePickerInput } from '@mantine/dates';

export default function Reservations() {
    const initialState ={
        name: "",
        email: "",
        phone: "",
        dateR: "",
        time: "",
        guests: 0,
        message: "",
    }
    const [formData, setFormData] = React.useState(initialState)
    const [value, setValue] = React.useState<Date | null>(null);

    console.log("front", )
    return (
        <>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className='flex flex-row w-full items-start max-w-6xl h-full px-4 mx-auto sm:px-6 '>
                <h1 className='text-4xl font-bold text-blue-600'>Make a reservation at Next Restaurant</h1>
            </div>

            <form action={createReservation} className='flex flex-col my-12 w-1/2 space-evenly'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={(event) => {setFormData(prevData => ({ ...prevData, name: event.target.value }))}} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(event) => {setFormData(prevData => ({ ...prevData, email: event.target.value }))}} />
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" onChange={(event) => {setFormData(prevData => ({ ...prevData, phone: event.target.value }))}}/>
                <label htmlFor="date">Date</label>
                <DatePickerInput
                  label="Pick date"
                  placeholder="Pick date"
                  value={value}
                  name="dateR"
                  onChange={setValue}
                />

                <input type="time" id="time" name="time" onChange={(event) => {setFormData(prevData => ({ ...prevData, time: event.target.value }))}}/>
                <label htmlFor="guests">Guests</label>
                <input type="number" id="guests" name="guests" onChange={(event) => {setFormData(prevData => ({ ...prevData, guests: Number(event.target.value) }))}}/>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" onChange={(event) => {setFormData(prevData => ({ ...prevData, message: event.target.value }))}} />
                <button type="submit">Submit</button>
            </form>

        </main>
        </>
    )
}
