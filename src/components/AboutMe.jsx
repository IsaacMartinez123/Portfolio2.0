import React from "react";

const AboutMe = () => {
    return (
        <section id="sobre-mi">
            <div className="flex flex-col md:flex-row mt-40 mx-4 md:mx-40">
                <div className="flex-shrink-0">
                    <img
                        className="rounded-full w-48 h-48 md:w-72 md:h-72 border-2 border-cyan shadow-lg"
                        src="/images/Yo.jpg"
                        alt="image_description"
                    />
                </div>
                <div className="mt-8 md:mt-0 md:ml-8 text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold mt-4 text-cyan">
                        Isaac Martinez Isaza
                    </h1>
                    <hr className="my-4 border-cyan w-full" />
                    <h2 className="text-xl md:text-2xl text-white">Desarrollador FullStack</h2>
                    <p className="text-xl md:text-md text-white mt-4 md:mt-9 font-light">
                        Soy desarrollador Full Stack con experiencia en desarrollo web y un background en análisis y desarrollo de sistemas de información. Tengo conocimientos en metodologías ágiles, control de versiones con GIT, stack de tecnología PERN, bases de datos MySQL y PostgreSQL, y frameworks como Laravel y Flutter. He trabajado en proyectos grupales e individuales, mejorando habilidades blandas como liderazgo, escucha activa, creatividad, adaptabilidad, actitud positiva y pensamiento crítico.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
