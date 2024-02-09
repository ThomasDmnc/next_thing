import Image from "next/image";
import { signOut } from "../../../auth";
import Navlinks from "./navlinks";

export default function Sidebar() {

  return (
    <div className="flex flex-col md:items-start py-8 md:py-12 items-center justify-between">
      <div>
        <Navlinks />
      </div>
      
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
        className="flex flex-row m-2 w-full justify-center items-center"
      >
        <button className="bg-gray-500 rounded p-4 font-bold text-white hover:bg-gray-70">
          Sign out
        </button>
      </form>
    </div>
  );
}
