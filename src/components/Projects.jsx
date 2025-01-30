import React from 'react'
import { projects } from './utils/utils';

export default function Projects() {

    const github = { name: "github", src: "/icons/github2.svg" }
    const video = { name: "video", src: "/icons/video.svg" }

    return (
        <section id='projects'>
            <h2 className="mt-32 mb-10 text-4xl font-bold text-center text-cyan">Proyectos</h2>

            <div className='flex flex-wrap justify-center space-x-40'>
                {projects.map((project, index) => (
                    <div className="w-96 h-svw bg-grayLight shadow-lg rounded-lg overflow-hidden">
                        <div className="relative group" key={index}>
                            <img
                                src={project?.img}
                                alt={project?.name}
                                className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:filter group-hover:grayscale group-hover:brightness-50"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-light p-10">{project?.desc}</p>
                            </div>
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-2xl font-bold text-white">{project?.name}</h3>
                            <div className="flex justify-center space-x-6">
                                <a href={project?.repo} target='_blank' rel="noopener noreferrer">
                                    <img
                                        className="w-12 h-12 md:w-12 md:h-12 mt-6 p-1 hover:transition-all duration-300 border-cyan transform hover:scale-110 hover:rotate-6"
                                        src={github?.src} alt={github?.name}
                                    />
                                </a>

                                <a href={project?.link} target='_blank' rel="noopener noreferrer">
                                    <img
                                        className="w-12 h-12 md:w-12 md:h-12 mt-6 p-1 hover:transition-all duration-300 border-cyan transform hover:scale-110 hover:rotate-6"
                                        src={video?.src} alt={video?.name}
                                    />
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
