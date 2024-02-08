"use client";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "../../lib/actions";
import {
    ExclamationCircleIcon,
  } from '@heroicons/react/24/outline';
import clsx from 'clsx'

export function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending, data, method, action } = useFormStatus();
  

  return (
    <>
      <form action={dispatch} className="flex flex-col my-12 w-full md:w-1/3 max-w-6xl">
        <label className="font-bold text-blue-600 text-lg py-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
          type="email"
          id="email"
          name="email"
          required
          placeholder="Your email address"
        />
        <label
          className="font-bold text-blue-600 text-lg py-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
          type="password"
          id="password"
          name="password"
          required
          placeholder="Your password"
        />
        <Submit />

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </form>
    </>
  );
}


function Submit() {
    const { pending, data, method, action } = useFormStatus();
    console.log(pending, data, method, action);
    return (
      <div className="flex flex-row w-full justify-center items-center my-8" aria-disabled={pending}>
        <button
          className={clsx(
            'bg-gray-500 rounded-lg p-4 font-bold text-white hover:bg-gray-700 w-1/3', !pending && 'opacity-50'
          )}
          type="submit"
          
        >
          Login
        </button>
      </div>
    );
  }