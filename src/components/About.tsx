import React from "react";
import { Eye, MapPin } from "lucide-react";
import Image from "next/image";

const About = () => {
    return (
        <section className="bg-blue-50">
            <div className="w-full max-w-7xl mx-auto px-6 py-20  text-tila-text">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left Image Card */}
                    <div className="relative">
                        <Image
                            width={600}
                            height={450}
                            src="/images/about.avif"
                            alt="Hero"
                            className="w-full h-[420px] md:h-[560px] object-cover rounded-3xl shadow-xl"
                        />

                        {/* Bottom Badge */}
                        <div className="absolute bottom-6 left-3 sm:left-6  bg-tila-surface   px-4 py-2 rounded-2xl flex items-center gap-2 shadow-md">
                            <Image
                                height={30}
                                width={30}
                                src="/icons/icon-192.png"
                                className="w-7 h-7 rounded-full"
                                alt="Community"
                            />
                            <p className="sm:text-sm text-xs text-gray-700">
                                Join our active legal community
                            </p>
                            <span className="bg-tila-primary  text-tila-surface  text-xs px-2 sm:py-1 py-0.5 rounded-xl">
                                +500
                            </span>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="">
                        <div className="w-full sm:mt-0 mt-10 ">
                            <div className="w-full">
                                <h1 className="text-xl md:text-3xl font-bold leading-snug text-tila-text">
                                    About The Indian Legal Associates
                                </h1>
                                <div className="h-[2px] my-3 w-full bg-gray-500"></div>
                            </div>
                            <ul className="mt-5 space-y-5 max-w-xl mx-auto text-left">
                                <li className="relative pl-6 text-lg text-gray-700">
                                    <span className="absolute left-0 top-1 text-tila-primary font-bold text-xl">•</span>
                                    <strong className="font-semibold">Professionalism</strong> – Upholding the highest standards of practice
                                </li>

                                <li className="relative pl-6 text-lg text-gray-700">
                                    <span className="absolute left-0 top-1 text-tila-primary font-bold text-xl">•</span>
                                    <strong className="font-semibold">Commitment</strong> – Client-first service delivery
                                </li>

                                <li className="relative pl-6 text-lg text-gray-700">
                                    <span className="absolute left-0 top-1 text-tila-primary font-bold text-xl">•</span>
                                    <strong className="font-semibold">Integrity & Transparency</strong> – Clear, honest, reliable guidance
                                </li>
                            </ul>
                        </div>



                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                            <div className=" p-6 rounded-2xl   border border-secondary">
                                <Eye className="w-10 h-10 text-tila-text  mb-3" />
                                <h3 className="text-xl  text-tila-text">Our Vision</h3>
                                <p className="text-gray-600 text-base mt-2">
                                    Delivering strategic, result-oriented, and client-centric legal services for individuals and corporations across India.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl   border border-secondary">
                                <MapPin className="w-10 h-10 text-tila-text  mb-3" />
                                <h3 className="text-xl  text-tila-text">Our Mission</h3>
                                <p className="text-gray-600 text-base mt-2">
                                    To serve as trusted partners, resolving disputes and empowering clients with preventive legal strategies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Philosophy Section */}
                {/* <div className="mt-24 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Philosophy</h2>

                    <ul className="max-w-xl mx-auto text-left mt-10 space-y-4">
                        <li className="relative pl-6 text-lg">
                            <span className="absolute left-0 text-tila-primary text-2xl">•</span>
                            <strong>Professionalism</strong> – Upholding the highest standards of practice
                        </li>
                        <li className="relative pl-6 text-lg">
                            <span className="absolute left-0 text-tila-primary text-2xl">•</span>
                            <strong>Commitment</strong> – Client-first service delivery
                        </li>
                        <li className="relative pl-6 text-lg">
                            <span className="absolute left-0 text-tila-primary text-2xl">•</span>
                            <strong>Integrity & Transparency</strong> – Clear, honest, reliable guidance
                        </li>
                    </ul>
                </div> */}

                {/* Vision & Mission */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                    <div className=" bg-tila-surface   p-10 rounded-3xl shadow-lg text-center">
                        <h3 className="text-2xl  text-tila-primary mb-3">Our Vision</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Delivering strategic, result-oriented, and client-centric legal services for individuals
                            and corporations across India.
                        </p>
                    </div>

                    <div className=" bg-tila-surface   p-10 rounded-3xl shadow-lg text-center">
                        <h3 className="text-2xl  text-tila-primary mb-3">Our Mission</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            To serve as trusted partners, resolving disputes and empowering clients with preventive legal strategies.
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default About;
