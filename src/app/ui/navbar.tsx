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
    return (
        <div className='w-full'>
            <div className='flex flex-row py-5 px-24 items-center justify-between'>
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
                            'justify-center p-3 font-bold text-blue-600 font-medium rounded-md hover:overline', pathname === link.url && 'overline'
                          )}>
                            <p>{link.name}</p>
                        </Link>
                    )}
                )}
            </div>
        </div>
        </div>


    )
}