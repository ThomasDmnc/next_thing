import styles from '@/app/ui/global.css';
import { Navbar } from './ui/navbar';


export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className='flex flex-col h-96 justify-evenly items-center'>
        <h1 className="text-6xl font-bold text-center">Next Restaurant</h1>
        <p className="text-2xl text-center">
          Generated with Next.js and Tailwind CSS.
        </p>
        <button className="bg-primary">Reservations</button>
      </div>
      <div className='flex flex-col justify-evenly items-center py-24 w-full'>

        <h2 className="text-4xl font-bold text-center pb-8">Some explainations about Next Restaurant</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia semper facilisis. Donec fermentum turpis in lacus tempor, eget pulvinar arcu fermentum. Nunc consectetur ligula eget sapien finibus vulputate. Ut aliquam odio eu sem cursus iaculis. Aliquam eget ex posuere sem aliquam dignissim. In gravida quam non elit ullamcorper porttitor a sed ligula. Nulla nec condimentum elit. Aliquam eu felis est. Vivamus iaculis viverra metus eu egestas. Nulla ullamcorper neque at blandit dictum. In porttitor tincidunt mauris id scelerisque.
        </p>
      </div>

    </main>
    </>
  );
}
