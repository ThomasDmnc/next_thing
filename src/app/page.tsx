import styles from '@/app/ui/global.css';
import { Navbar } from './ui/navbar';
import Link from 'next/link';


export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex h-screen flex-col items-center p-24">
      <div className='w-full h-3/4 flex flex-col justify-around items-center bg-cover bg-center'style={{backgroundImage: "url('https://images.unsplash.com/photo-1604328471151-b52226907017?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className='flex flex-col justify-around items-center h-full px-4 mx-auto sm:px-6 '>
          <div className='max-w-6xl flex flex-col h-96 justify-evenly items-center text-white' >
            <h1 className="text-6xl font-bold text-center ">Next Restaurant</h1>
            <p className="text-2xl text-center">
              Generated with Next.js and Tailwind CSS.
            </p>
            <Link
              href="/reservations"  
            >
              <button className="bg-gray-500 rounded p-4 font-bold text-white hover:bg-gray-700">Book a table</button>
            </Link>

          </div>
        </div>
      </div>
      <div>
        <div className='max-w-6xl flex flex-col justify-evenly items-center py-24'>

          <h2 className="text-4xl font-bold text-center pb-8">Some explainations about Next Restaurant</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia semper facilisis. Donec fermentum turpis in lacus tempor, eget pulvinar arcu fermentum. Nunc consectetur ligula eget sapien finibus vulputate. Ut aliquam odio eu sem cursus iaculis. Aliquam eget ex posuere sem aliquam dignissim. In gravida quam non elit ullamcorper porttitor a sed ligula. Nulla nec condimentum elit. Aliquam eu felis est. Vivamus iaculis viverra metus eu egestas. Nulla ullamcorper neque at blandit dictum. In porttitor tincidunt mauris id scelerisque.
          </p>
        </div>
      </div>
    </main>
    </>
  );
}
