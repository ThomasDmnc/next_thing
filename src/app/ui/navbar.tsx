'use client'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const links = [
    {
        name: 'Menu',
        url: '/menu'
    },
    {
        name: 'Reservations',
        url: '/reservations'
    },
    {
        name: 'Contact',
        url: '/contact'
    },
]


export function Navbar(){
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className='flex flew-row w-full py-5 px-24 items-center justify-between'>
            <Link href='/'>
                <Image 
                    src="https://cdn.worldvectorlogo.com/logos/next-js.svg" 
                    alt="Logo of the Next Restaurant"
                    width={50}
                    height={50}
                />
            </Link>
            <div className="flex flex-row w-[40%] items-center justify-evenly">
                {links.map((link) => {
                    return (
                        <Link key={link.name} href={link.url}  
                        className={clsx(
                            'justify-center bg-gray-50 p-3 text-sm font-medium rounded-md hover:bg-secondary hover:', pathname === link.url && 'underline'
                          )}>
                            <p>{link.name}</p>
                        </Link>
                    )}
                )}
            </div>
        </div>
    )
}