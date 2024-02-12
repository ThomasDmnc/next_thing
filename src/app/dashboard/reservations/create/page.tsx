import NewForm from '../../../ui/reservations/new-form'

export default function CreateReservation(){
    return(
        <main className="flex min-h-screen flex-col w-screen items-start py-8 md:py-12 lg:py-12 px-4 md:px-12">
            <div className='flex flex-row justify-center items-start max-w-6xl'>
                <h1 className='text-4xl font-bold text-blue-600'>Create a new reservation:</h1>
            </div>
            <NewForm />
        </main>
    )
}