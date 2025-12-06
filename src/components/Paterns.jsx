import React, { useState, useEffect } from 'react';
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import $ from 'jquery'; 

function Paterns (){
    const supporterLogos = [
        { id: 1, src: "/parceiro1.png", alt: 'Apoiador 1' },
        { id: 2, src: "/parceiro2.png", alt: 'Apoiador 2' },
        { id: 3, src: "/parceiro3.png", alt: 'Apoiador 3' },
        { id: 4, src: "/parceiro4.png", alt: 'Apoiador 4' },
        { id: 5, src: "/parceiro5.png", alt: 'Apoiador 5' },
    ];
    const [commnets, setComments] = useState([]);
    useEffect(() => {
        $.ajax({
            url: "https://api.securitepay.com.br/v1/paterns",
            method: 'GET',
            dataType: 'json', 
            success: function(data) {
                setComments(data);
            },
            error: function(textStatus) {
                console.error("Erro na API com jQuery:", textStatus);
            }
        });     
        return () => {
        };
    }, []); 

    const scrollRef = useRef(null);

    const next = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    const prev = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };


    const Card = ({ name, position, comment, image }) => (
        <div class="grid w-full border-2 content-between justify-items-stretch 
            border-gray-200 rounded-xl p-3  
            xs:flex-shrink-1 flex-shrink-0 
            hover:cursor-pointer hover:scale-105 hover:border-fuchsia-700">
            <div class="w-full text-wrap">
                <p class="sm:text-md md:text-lg mt-2 mb-5 italic">"{comment}"</p>
            </div>

            <div class="w-full flex gap-3 item-end">
                <div clas="grid content-center p-0 my-0">
                    <img
                        src={image}
                        alt={name}
                        class="h-12 w-16 object-cover rounded-lg"
                    />
                </div>
                <div class="w-auto grid content-center gap-0">
                    <h2 class="text-xl font-semibold">{name}</h2>
                    <h4 class="text-sm text-gray-600">{position}</h4>
                </div>
            </div>
        </div>
    );

    return (
        <section class="py-4">
            <div class="md:grid lg:flex gap-3 w-11/12 justify-center mx-auto">
                <div class="md:w-full lg:w-1/2 mb-5">
                    <h2 class="font-bold text-3xl text-center">
                        Porque todos preferem a <span class="text-fuchsia-700">SecuritePay</span>
                    </h2>
                </div>

                <div class="md:w-full lg:w-1/2">
                    <div class="flex gap-3 text-center justify-center items-center space-x-8 flex-wrap">
                        {supporterLogos.map((logo) => (
                        <div key={logo.id} class="text-center">
                            <img
                            src={logo.src}
                            alt={logo.alt}
                            class="hover:cursor-pointer max-h-6"
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <div class="relative mx-auto w-11/12 md:w-full">
                <button
                    onClick={prev}
                    class="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md hover:cursor-pointer"
                >
                    <ChevronLeft/>
                </button>
                <div ref={scrollRef} class="px-5 py-12 w-11/12 mx-auto grid grid-flow-col xs:auto-cols-[80%] sm:auto-cols-[50%] md:auto-cols-[30%] lg:auto-cols-[30%] gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory">
                    {commnets.map((commnet) => (
                    <Card 
                        name={commnet.name} 
                        position={commnet.position} 
                        comment={commnet.comment} 
                        image={commnet.image} 
                    />
                    ))}
                </div>
                <button
                    onClick={next}
                    class="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md hover:cursor-pointer"
                    >
                    <ChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Paterns
