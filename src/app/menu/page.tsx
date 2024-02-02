import { Navbar } from '../ui/navbar';

export default function Menu() {

    return (
        <>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className='max-w-6xl h-full px-4 mx-auto sm:px-6'>
                <h1>Menu</h1>
            </div>
        </main>
        </>
    )
}
