import React from 'react';

function Navbar() {
    return (
        <nav className="bg-grayDark text-white p-4 fi">
            <div className="container mx-auto flex justify-center items-center">
                <div className="space-x-4">
                    <button className="before:ease relative h-12 w-28 overflow-hidden border border-cyan shadow-2xl rounded-md before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-cyan before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 transition-all duration-200">
                        <a href='#sobre-mi' className="relative z-10">Sobre Mi</a>
                    </button>

                    <button className="before:ease relative h-12 w-48 overflow-hidden border border-cyan shadow-2xl rounded-md before:absolute before:left-0 before:-ml-2 before:h-52 before:w-52 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-cyan before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 transition-all duration-200">
                        <a href='#educacion' className="relative z-10">Educación y Tecnologías</a>
                    </button>

                    <button className="before:ease relative h-12 w-28 overflow-hidden border border-cyan shadow-2xl rounded-md before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-cyan before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 transition-all duration-200">
                        <a href='#projects' className="relative z-10">Proyectos</a>
                    </button>

                    <button className="before:ease relative h-12 w-28 overflow-hidden border border-cyan shadow-2xl rounded-md before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-cyan before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 transition-all duration-200">
                        <a href='#experiencia' className="relative z-10">Experiencia</a>
                    </button>

                    <button className="before:ease relative h-12 w-28 overflow-hidden border border-cyan shadow-2xl rounded-md before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-cyan before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 transition-all duration-200">
                        <a href='#contacto' className="relative z-10">Contacto</a>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;