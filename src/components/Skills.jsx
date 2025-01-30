import React from 'react'
import { icons } from './utils/utils';

export default function Skills() {
    return (
        <section id='educacion' >
            <div className="flex flex-col md:flex-row items-center mt-10">
                <div className="mx-28">
                    <h1 className="text-2xl md:text-4xl font-bold mt-4 text-cyan">
                        Educación y Tecnologías
                    </h1>
                    <ul>
                        <li className="mt-2">
                            <span className="font-light text text-white block text-xl">
                                Tecnólogo en análisis y desarrollo de sistemas de información
                            </span>
                            <span className="font-light text text-white block text-xl">
                                (Enero 2021 - Enero 2023)
                            </span>
                            <a
                                href="https://www.sena.edu.co/es-co/Paginas/default.aspx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan block mt-1 hover:underline text-xl"
                            >
                                www.sena.edu.co
                            </a>
                        </li>

                        <li className="mt-2">
                            <span className="font-light text text-white block text-xl">
                                Desarrollador Full Stack (Marzo 2023 - Julio 2023)
                            </span>
                            <a
                                href="https://www.soyhenry.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan block mt-1 hover:underline text-xl"
                            >
                                www.soyhenry.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="columns-4 mt-8">
                    {icons.map((icon, index) => (
                        <div className="flex" key={index}>
                            <img
                                src={icon?.src}
                                alt={icon?.name}
                                className="w-26 h-26 md:w-20 md:h-20 m-4 p-3 rounded-xl border-2 filter grayscale hover:filter-none transition-all duration-300 border-cyan transform hover:scale-110 hover:rotate-6"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}
