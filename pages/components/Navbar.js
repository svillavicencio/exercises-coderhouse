import Avatar from "./avatar"

export default function Navbar(){

    return(
    <div className="container top-0 max-w-full fixed bg-gray-900 text-white font-semibold text-lg font-mono flex flex-row justify-between px-8 py-5 shadow-xl">
        <ul className="flex justify-evenly w-1/4">
            <li className="hover:text-gray-500 cursor-pointer">Inicio</li>
            <li className="hover:text-gray-500 cursor-pointer">Contacto</li>
        </ul>
        <div className="group flex flex-col">
            <Avatar/>
            <div className="hidden group-hover:block ">
                <div className="fixed bg-gray-50 right-8 text-black px-4 py-2 capitalize shadow-lg rounded-md font-semibold">
                    <ul className="flex flex-col justify-between">
                        <li className="hover:text-gray-400 cursor-pointer">perfil</li>
                        <li className="hover:text-gray-400 cursor-pointer">cerrar sesion</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}