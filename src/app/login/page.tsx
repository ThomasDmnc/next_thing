import { LoginForm } from '../ui/login/loginForm'

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-12 lg:p-24">
            <div className='flex flex-row w-full items-center max-w-6xl h-full px-4 mx-auto'>
                <h1 className='text-4xl font-bold text-blue-600'>Log in Next Restaurant Management:</h1>
            </div>
            <div className='w-full h-4/6 flex flex-col items-center justify-center'>
                <LoginForm />
            </div>

        </main>
    )
}