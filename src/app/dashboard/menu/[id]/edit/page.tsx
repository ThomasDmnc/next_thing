"use client";
import { MenuItem } from "@/app/lib/definitions";
import { getMenuItem } from "@/app/lib/actions";
import { use, useEffect, useState } from "react";
import EditForm from "@/app/ui/menu/edit-form";

export default function EditMenuItem({ params }: { params: { id: string } }) {
    const id = params.id;
    const [menuItem, setMenuItem] = useState<MenuItem | null>(null);
    useEffect(() => {
        getMenuItem(id).then(setMenuItem)
    }, [id]);
    
    return (
        <>
        <main className="flex min-h-screen flex-col w-fit items-start py-8 md:py-12 lg:py-12 px-4 md:px-12">
            <div className="flex flex-row w-full items-start max-w-6xl h-full">
            <h1 className="text-4xl font-bold text-blue-600">
                Edit the Menu Item: {menuItem?.name}
            </h1>
            </div>
            {menuItem && <EditForm menuItem={menuItem} />}
        </main>
        </>
    );
}
