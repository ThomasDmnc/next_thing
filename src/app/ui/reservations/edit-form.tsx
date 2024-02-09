"use client";
import * as React from "react";
import { createReservation } from "../../lib/actions";
import { DatePickerInput } from "@mantine/dates";
import { Reservation } from "@/app/lib/definitions";

export default function EditForm(reservation: Reservation) {
  return (
    <form
      action={createReservation}
      className="flex flex-col w-full max-w-4xl justify-evenly items-start h-full px-4 py-4 mx-auto sm:px-6"
    >
      <label className="font-bold text-blue-600 text-lg py-2" htmlFor="name">
        Name
      </label>
      <input
        required
        className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
        type="text"
        id="name"
        name="name"
        placeholder="Paul Bocuse"
      />
      <label className="font-bold text-blue-600 text-lg py-2" htmlFor="email">
        Email
      </label>
      <input
        required
        className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
        type="email"
        id="email"
        name="email"
        placeholder="paul@miam.org"
      />
      <label className="font-bold text-blue-600 text-lg py-2" htmlFor="phone">
        Phone
      </label>
      <input
        required
        className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
        type="tel"
        id="phone"
        name="phone"
        placeholder="0601020304"
        minLength={10}
        maxLength={10}
        pattern="^\d{10}$"
      />
      <label className="font-bold text-blue-600 text-lg py-2" htmlFor="date">
        Date
      </label>
      <div className="flex flex-row w-full justify-center items-center">
        <DatePickerInput
          placeholder="Pick date"
          name="date"
          className="w-1/3 items-center"
        />
      </div>
      <label className="font-bold text-blue-600 text-lg py-2" htmlFor="time">
        Time
      </label>
      <input
        required
        className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
        type="time"
        id="time"
        name="time"
      />
      <label className="font-bold text-blue-600 text-lg py-2" htmlFor="guests">
        Guests
      </label>
      <input
        required
        className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
        type="number"
        id="guests"
        name="guests"
        placeholder="2"
        min="1"
        max="10"
      />
      <label className="font-bold text-blue-600 text-lg py-2" htmlFor="message">
        Message
      </label>
      <textarea
        required
        rows={5}
        className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
        id="message"
        name="message"
        placeholder="Bonjour. Yes, it's Paul. I'd like to book a table for 2. Extra-butter in my purée, thanks."
      />
      <div className="flex flex-row w-full justify-center items-center my-8">
        <button
          className="bg-gray-500 rounded-lg p-4 font-bold text-white hover:bg-gray-700 w-1/3"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
