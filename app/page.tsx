import BoyFight from '@/public/boy-fight.png';
import Logo from '@/public/logo.svg';
import AboutImg from '@/public/about-image.png'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className='bg-stone-400'>
      <header
        className="w-full h-[700px] bg-stone-900"
        style={{
          backgroundImage: `linear-gradient(to right, #1c1917, rgba(28, 25, 23, 0.4)), url('${BoyFight.src}')`,
          backgroundSize: '100% 150%',
          backgroundPosition: 'calc(100% + 300px) 20%',
          backgroundRepeat: 'no-repeat',
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 70px), 0 100%)',
        }}
      >
        <nav className="flex items-center justify-between mx-10 px-10 py-10">
          <Image className='w-auto animate-fade-in' src={Logo} alt='Logo' width={74} height={74} />
          <ul className="flex space-x-8 text-white text-lg font-medium">
            <li className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
              <Link href='#home' >HOME</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
              <Link href='#about' >ABOUT</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
              <Link href='#location' >LOCATIONS</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
              <Link href='#contacts' >CONTACTS</Link>
            </li>
          </ul>
        </nav>
        <h1 className='text-white font-bold text-8xl mx-10 mt-14 p-10 animate-slide-in'>FIGHT LIKE <br/><span className='text-red-700'>A CHAMPION</span></h1>
      </header>
      <section id='about' className='h-[550px] mx-10 px-10 flex'>
        <div className="w-full flex flex-row justify-between items-center">
          <Image className='h-auto shadow-[0px_0px_21px_6px_rgba(0,_0,_0,_0.5)]' src={AboutImg} alt='about image' width={530} height={375} />
          <div className='w-1/3 h-[375px] flex flex-col justify-between'>
            <h2 className='text-stone-900 font-bold text-6xl pl-6 animate-rgb'>ABOUT US</h2>
            <p className='text-stone-800 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae delectus enim ratione, similique ae necessitatibus, illum officia eius fuga quod provident suscipit magni quam.</p>
            <Button className='bg-red-600 w-2/5 h-14 p-3 text-2xl cursor-pointer'>SIGN UP</Button>
          </div>
        </div>
      </section>
      <section id='contacts' className='bg-stone-900'>
        <div className="flex justify-between items-baseline-last mx-10 px-10 py-20">
          <h1 className='text-white font-bold text-7xl mt-10'>READY FOR YOUR <br/><span className='text-red-700'>NEXT </span>LESSON?</h1>
          <ul className="flex space-x-8 text-white text-lg font-medium">
            <li className="hover:text-red-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-120">
              <Link href=''><Facebook/></Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-120">
              <Link href=''><Instagram/></Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-120">
              <Link href=''><Linkedin/></Link>
            </li>
          </ul>
        </div>
        <ul className="flex justify-between items-center mx-10 px-10 py-10 space-x-8 text-white text-2xl font-medium">
            <li className="hover:text-gray-400  cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
              <Link href=''>www.fightforyourlife@gmail.com</Link>
            </li>
            <li className="hover:text-gray-400  cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
              <Link href=''>Privacy policies</Link>
            </li>
            <li className="hover:text-gray-400  cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
              <Link href=''>Terms & Conditions</Link>
            </li>
          </ul>
      </section>
    </div>
  );
}
