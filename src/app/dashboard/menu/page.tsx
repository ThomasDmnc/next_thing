"use client";
import { useEffect, useState } from "react";
import { MenuItem } from "@/app/lib/definitions";
import Link from "next/link";
import Image from "next/image";
import { getMenuItems, deleteMenuItem } from "@/app/lib/actions";

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    getMenuItems().then(setMenuItems);
  }, [menuItems]);

  return (
    <main className="flex min-h-screen flex-col w-screen items-start py-8 md:py-12 lg:py-12 px-4 md:px-12">
      <div className="flex flex-row justify-center items-start max-w-6xl">
        <h1 className="text-4xl font-bold text-blue-600">Manage Your Menu</h1>
      </div>

      <div className="my-8">
        <Link href="/dashboard/menu/create">
          <button className="bg-blue-600 rounded p-4 font-bold text-white hover:bg-blue-900">
            Create a new Menu Item
          </button>
        </Link>
      </div>

      <div className="grow">
        {menuItems &&
          menuItems.map((menuItem: MenuItem) => {
            return (
              <div
                className="w-full h-full flex flex-col border-2 items-center justify-center p-2"
                key={menuItem.id}
              >
                {/* <Image
                  src={menuItem.image}
                  alt={menuItem.name}
                  width={128}
                  height={128}
                /> */}
                <p>{menuItem.name}</p>
                <p>{menuItem.description}</p>
                <p>{menuItem.ingredients}</p>
                <p>${menuItem.price}</p>
                <div className='flex flex-row p-4 justify-between w-full'>
                                {/* <Link
                                    href={`/dashboard/menu/${menuItem.id}/edit`}
                                >
                                    <button className='bg-blue-600 rounded p-2 font-bold text-white text-sm hover:bg-blue-900 mr-2'>
                                            Edit the menu item
                                    </button>
                                </Link> */}
                                <form action={deleteMenuItem.bind(null, menuItem.id)}>
                                    <button className='bg-red-500 rounded p-2 font-bold text-white text-sm hover:bg-red-600 ml-2'>
                                        Delete the menu item
                                    </button>
                                </form>
                            </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
