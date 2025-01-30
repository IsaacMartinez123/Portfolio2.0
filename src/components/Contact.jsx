import React from 'react'
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import validate from './utils/validate';

export default function Contact() {

    const github = { name: "github", src: "/icons/github.svg" }
    const linkedin = { name: "linkedin", src: "/icons/linkedin.svg" }

    const [alert, setAlert] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const [error, setError] = useState({
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });

        setError(validate({
            ...formData,
            [event.target.name]: event.target.value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.subject || !formData.message) {
            setAlert({
                type: "error",
                title: "Error",
                message: "Por favor, completa el formulario correctamente.",
            });

            setTimeout(() => setAlert(null), 3000);
            return;
        }

        if (error.email || error.subject || error.message) {
            setAlert({
                type: "error",
                title: "Error",
                message: "Por favor, completa las validaciones correctamente.",
            });

            setTimeout(() => setAlert(null), 3000);
            return;
        }

        emailjs.send(
            "service_txsjsd1",
            "template_hrllx8k",
            formData,
            "QMQriTNkFWj6DEj_S"
        )
            .then(() => {
                setAlert({
                    type: "success",
                    title: "¡Mensaje enviado!",
                    message: "Tu mensaje ha sido enviado con éxito.",
                });
                setTimeout(() => setAlert(null), 3000);
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje:", error);
                // setAlert({
                //     type: "error",
                //     title: "Error",
                //     message: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
                // });

                setTimeout(() => setAlert(null), 3000);
            });
    };

    return (
        <section id='contacto' className="dark:bg-grayMedium">
            {alert && (
                <div className={`fixed top-5 right-5 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${alert.type === "success" ? "bg-green-200 border-green-600 text-green-600" : "bg-red-200 border-red-600 text-red-600"}`} role="alert">
                    <p className="font-bold">{alert.title}</p>
                    <p>{alert.message}</p>
                </div>

            )}
            {/* {alert && (
                <div className={`fixed bottom-5 right-5 z-50 p-6 w-96 max-w-xs rounded-lg shadow-xl transition-all duration-300 ${alert.type === "success" ? "bg-green-200 border-green-600 text-green-600" : "bg-red-200 border-red-600 text-red-600"}`} role="alert">
                    <p className="font-bold text-lg">{alert.title}</p>
                    <p className="text-md">{alert.message}</p>
                </div>
            )} */}

            <div className="py-8 lg:py-16 px-4 max-w-screen-md mt-16">
                <h2 className="mb-4 text-4xl font-bold text-center text-cyan">Contactame</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-lg">Siempre estoy abierto a nuevas oportunidades, mis redes sociales están siempre a disposicion y puedes contactarme por ahi, te espero.</p>
                <form action="#" className="space-y-8" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-center space-x-4">
                        <div className="flex-1">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Correo
                            </label>
                            <input
                                name='email'
                                id="email"
                                className={`border border-2 border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-grayMedium border-cyanLight placeholder-gray-300 text-gray-300 focus:outline-none focus:ring-0
                                    ${error?.email ? "border-red-600 focus:border-red-600 border-red-500 focus:border-red-500" : "focus:border-cyanLight border-cyanLight focus:border-cyanLight"}`}
                                onChange={handleChange}
                                value={formData.email}
                                placeholder='Ingresa tu correo electronico'
                            />
                            {error.email && <p className=" text-red-600 text-md font-semibold">{error.email}</p>}

                        </div>

                        <div className="flex-1">
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                name='subject'
                                id="subject"
                                className={`border border-2 border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-grayMedium border-cyanLight placeholder-gray-300 text-gray-300 focus:outline-none focus:ring-0
                                    ${error?.subject ? "border-red-600 focus:border-red-600 border-red-500 focus:border-red-500" : "focus:border-cyanLight border-cyanLight focus:border-cyanLight"}`}
                                placeholder="Ingresa tu nombre"
                                onChange={handleChange}
                                value={formData.subject}
                            />
                            {error.subject && <p className=" text-red-600 text-md font-semibold">{error.subject}</p>}
                        </div>
                    </div>


                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            onChange={handleChange}
                            value={formData.message}
                            className={`border-2 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-grayMedium placeholder-gray-300 text-gray-300 focus:outline-none focus:ring-0
                                ${error?.message ? "border-red-600 focus:border-red-600 border-red-500 focus:border-red-500" : "focus:border-cyanLight border-cyanLight focus:border-cyanLight"}`}
                            placeholder="Escribe tu mensaje..."
                        ></textarea>

                        {error.message && <p className=" text-red-600 text-md font-semibold">{error.message}</p>}
                    </div>
                    <button type="submit" className="text-white before:ease relative h-12 w-28 overflow-hidden border border-cyan shadow-2xl rounded-md before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-cyan before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
                        <span className="relative z-10">Enviar</span>
                    </button>
                </form>

                <div className='flex justify-center space-x-4'>
                    <a href="https://www.linkedin.com/in/isaac-martinez-isaza/" target='_blank' rel="noopener noreferrer">
                        <img
                            className="w-26 h-26 md:w-20 md:h-20 mt-14 filter grayscale hover:filter-none transition-all duration-300 border-cyan transform hover:scale-110 hover:rotate-6"
                            src={linkedin?.src} alt={linkedin?.name} />
                    </a>

                    <a href="https://github.com/IsaacMartinez123" target='_blank' rel="noopener noreferrer">
                        <img
                            className="w-26 h-26 md:w-20 md:h-20 mt-14 p-1 filter grayscale hover:filter-none transition-all duration-300 border-cyan transform hover:scale-110 hover:rotate-6"
                            src={github?.src} alt={github?.name}
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}
