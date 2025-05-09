import BoyFight from '@/public/boy-fight.png';
import Logo from '@/public/logo.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <header
        className="w-full h-[644px] bg-stone-900"
        style={{
          backgroundImage: `linear-gradient(to right, #1c1917, rgba(28, 25, 23, 0.4)), url('${BoyFight.src}')`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'calc(100% + 100px) center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <nav className="flex items-center justify-between mx-10 px-10 py-10">
          <Image src={Logo} alt='Logo' width={74} height={74} />
          <ul className="flex space-x-8 text-white text-lg font-medium">
            <li className="hover:text-gray-400 cursor-pointer">HOME</li>
            <li className="hover:text-gray-400 cursor-pointer">ABOUT</li>
            <li className="hover:text-gray-400 cursor-pointer">LOCATIONS</li>
            <li className="hover:text-gray-400 cursor-pointer">CONTACTS</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
