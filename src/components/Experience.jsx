import React from "react";
import { experiences } from "./utils/utils";

export default function Experience() {
    return (
        <section id='experiencie' className="mt-10">
            <h1 className="text-2xl md:text-4xl font-bold mt-4 text-cyan text-center">
                Experiencia
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 px-4 md:px-10">
                {experiences?.map((experience, index) => (
                    <div key={index} className="bg-grayLight text-cyanLight border-l-8 border-cyan rounded-md p-4 m-3 mx-10 w-[650px]">
                        <p className="font-semibold text-2xl">{experience?.name}</p>
                        <div className="text-cyanLight font-thin text-lg my-3">
                            <span>{experience?.fecha}</span>
                        </div>
                        <div className="text-white font-thin text-md">
                            <span>{experience?.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
