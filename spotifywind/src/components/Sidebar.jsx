import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { LuLibraryBig } from "react-icons/lu";

const Sidebar = () => {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"/>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
                <div className="w-3 h-3 bg-green-500 rounded-full"/>
            </div>
            <nav className="space-y-5 mt-5">
                <a href="" className="flex items-center gap-3 text-base font-semibold text-zinc-200">
                    <GoHomeFill />
                    Início
                </a>
                <a href="" className="flex items-center gap-3 text-base font-semibold text-zinc-200">
                    <CiSearch size={20}/>
                    Buscar
                </a>
                <a href="" className="flex items-center gap-3 text-base font-semibold text-zinc-200">
                    <LuLibraryBig />
                    Sua Biblioteca
                </a>
            </nav>

            <nav className="flex flex-col gap-3 mt-6 pt-6 border-t border-zinc-800">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">This is Calcinha Preta</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">estoura tímpano </a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">No Repeat</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Minha Playlist #13</a>
            </nav>
        </aside>
    );
}

export default Sidebar
