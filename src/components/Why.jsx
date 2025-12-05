import React, { useState, useEffect } from 'react';
import $ from 'jquery'; 

function Why (){
    const [benefits, setBenefits] = useState([]);
    useEffect(() => {
        $.ajax({
            url: "https://api.securitepay.com.br/endpoint/GET_benefits.php",
            method: 'GET',
            dataType: 'json', 
            success: function(data) {
                setBenefits(data);
            },
            error: function(textStatus) {
                console.error("Erro na API com jQuery:", textStatus);
            }
        });     
        return () => {
        };
    }, []); 

    const Card = ({ title, description, icon }) => (
        <div class="mb-3 snap-center sm:w-11/12 min-w-[288px] max-w-[400px]">
            <a disabled={true} target="_self" class="group flex flex-col select-none bg-gray-50 h-full rounded-3xl border-2 border-solid border-gray-200 p-6">
                <div class="flex items-center justify-between">
                    <div class="size-fit text-3xl text-fuchsia-700 mb-5">
                        <i className={`text-fuchsia-700 text-2xl ${icon}`}></i>
                    </div>
                </div>
                <div class="flex flex-col gap-2 text-start">
                    <h1 class="font-bold text-lg text-gray-900">{title}</h1>
                    <p class="text-gray-900 text-lg">{description}</p>
                </div>
            </a>
        </div>
    );

    return (
        <section class="grid justify-center w-full text-center mx-auto py-8">
            <h2 class="text-3xl mb-8">
                <strong>
                    Porque a <span class="text-fuchsia-700">SecuritePay é diferente</span>?
                </strong>
            </h2>
            <div id="cardsBenefits" class="w-11/12 mx-auto md:grid gap-3 md:grid-cols-3 justify-center sm:flex sm:overflow-x-scroll sm:snap-x sm:snap-mandatory sm:scroll-smooth sm:pb-4 sm:space-x-4">
                    {benefits.map((benefit) => (
                        <Card 
                            title={benefit.title} 
                            description={benefit.description} 
                            icon={benefit.icon} 
                        />
                    ))}
            </div>
            <div class="mt-3 sm:grid md:hidden">
                <p>
                    Veja mais arrastando os cards
                    <span class="scale-125 rotate-12">
                        <i class="bi bi-hand-index-thumb text-fuchsia-700 text-2xl mx-2"></i>
                    </span>
                </p>
            </div>
        </section> 
    )
}

export default Why
