import Image from 'next/image';

import { FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";
import { RiShuffleLine } from "react-icons/ri";
import { FiRepeat, FiMaximize2 } from "react-icons/fi";
import { GiMicrophone } from "react-icons/gi";
import { HiOutlineQueueList } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { IoVolumeLowOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-zinc-800 px-6 py-4 border-t border-zinc-700">
        <div className='flex items-center gap-3'>
          <Image src="/hmhas.png" width={56} height={56} alt="Capa de álbum"/>
          <div className='flex flex-col'>
            <strong className='font-normal'>LUNCH</strong>
            <span className='text-xs text-zinc-400'>Billie Eilish</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'> 
            <RiShuffleLine size={20} className='text-zinc-200' />
            <FaStepBackward size={20} className='text-zinc-200' />
            <button className='p-3 rounded-full bg-white text-black'>
                <FaPlay size={20} className='pl-0.5'/>
            </button>
            <FaStepForward size={20} className='text-zinc-200' />
            <FiRepeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:14</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <GiMicrophone size={20} className='text-zinc-200' />
          <HiOutlineQueueList size={20} className='text-zinc-200' />
          <FaComputer size={20} className='text-zinc-200' />
          <div className='flex items-center gap-2'>
            <IoVolumeLowOutline size={20} className='text-zinc-200' />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <FiMaximize2 size={20} className='text-zinc-200' />
        </div>
      </footer>
  );
}

export default Footer;