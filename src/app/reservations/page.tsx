import { Navbar } from '../ui/navbar';

export default function Reservations() {

    return (
        <>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className='flex flex-row w-full items-start max-w-6xl h-full px-4 mx-auto sm:px-6 '>
                <h1 className='text-4xl font-bold text-primary'>Make a reservation at Next Restaurant</h1>
            </div>

        </main>
        </>
    )
}
