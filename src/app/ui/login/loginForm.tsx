"use client";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "../../lib/actions";
import clsx from 'clsx'

export function LoginForm() {
  const [state, dispatch] = useFormState(authenticate, undefined);
  const { pending, data, method, action } = useFormStatus();
  

  return (
    <>
      <form className="flex flex-col my-12 w-full md:w-1/3 max-w-6xl">
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