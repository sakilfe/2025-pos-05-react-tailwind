import Image from 'next/image';
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-2">
              <FaChevronLeft size={20} />
            </button>
            <button className="rounded-full bg-black/40 p-2">
              <FaChevronRight size={20} />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Olá, sf!</h1>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <a href='#' className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/djalbum.jpg" width={104} height={104} alt="Capa de álbum"/>
              <strong>Djavan"Ao Vivo"</strong>
              <button className='p-4 rounded-full bg-green-500 ml-auto mr-6 invisible group-hover:visible transition-colors'>
                <FaPlay size={20} className='text-black pl-0.5'/>
              </button>
            </a>
            <a href='#' className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/obgd.jpeg" width={104} height={104} alt="Capa de álbum"/>
              <strong>Obrigado Deus</strong>
              <button className='p-4 rounded-full bg-green-500 ml-auto mr-6 invisible group-hover:visible transition-colors'>
                <FaPlay size={20} className='text-black pl-0.5'/>
              </button>
            </a>
            <a href='#' className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/hmhas.png" width={104} height={104} alt="Capa de álbum"/>
              <strong>HIT ME HARD AND SOFT</strong>
              <button className='p-4 rounded-full bg-green-500 ml-auto mr-6 invisible group-hover:visible transition-colors'>
                <FaPlay size={20} className='text-black pl-0.5'/>
              </button>
            </a>
            <a href='#' className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/cp20mais.jpeg" width={104} height={104} alt="Capa de álbum"/>
              <strong>As 20 +</strong>
              <button className='p-4 rounded-full bg-green-500 ml-auto mr-6 invisible group-hover:visible transition-colors'>
                <FaPlay size={20} className='text-black pl-0.5'/>
              </button>
            </a>
            <a href='#' className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/gragra.jpeg" width={104} height={104} alt="Capa de álbum"/>
              <strong>Grafith</strong>
              <button className='p-4 rounded-full bg-green-500 ml-auto mr-6 invisible group-hover:visible transition-colors'>
                <FaPlay size={20} className='text-black pl-0.5'/>
              </button>
            </a>
            <a href='#' className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/mari.jpeg" width={104} height={104} alt="Capa de álbum"/>
              <strong>Todos Os Cantos, Vol. 1 (Ao Vivo)</strong>
              <button className='p-4 rounded-full bg-green-500 ml-auto mr-6 invisible group-hover:visible transition-colors'>
                <FaPlay size={20} className='text-black pl-0.5'/>
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Feito para sf!</h2>

          <div className='grid grid-cols-8 gap-4 mt-6'>
              <a href='#' className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
                <Image src="/dailymix.png" className='w-full' width={104} height={104} alt="Capa de álbum"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Chappell Roan, Reneé Rapp, Billie Eilish e mais</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
                <Image src="/dailymix.png" className='w-full' width={104} height={104} alt="Capa de álbum"/>
                <strong className='font-semibold'>Daily Mix 2</strong>
                <span className='text-sm text-zinc-400'>Aviões do Forró, Calcinha Preta, Mastruz com Leite e mais</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
                <Image src="/dailymix.png" className='w-full' width={104} height={104} alt="Capa de álbum"/>
                <strong className='font-semibold'>Daily Mix 3</strong>
                <span className='text-sm text-zinc-400'>DJ Blakes, MC CAROL 011, MC Rafa 22 e mais</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
                <Image src="/dailymix.png" className='w-full' width={104} height={104} alt="Capa de álbum"/>
                <strong className='font-semibold'>Daily Mix 4</strong>
                <span className='text-sm text-zinc-400'>Alceu Valença, ANAVITÓRIA, Tim Bernades e mais</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
                <Image src="/descobertas.jpeg" className='w-full' width={104} height={104} alt="Capa de álbum"/>
                <strong className='font-semibold'>Descobertas da Semana</strong>
                <span className='text-sm text-zinc-400'>Sua mixtape semanal cheia de músicas novas</span>
              </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}