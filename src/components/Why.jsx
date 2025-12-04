import React, { useRef } from 'react';

function Why (){
    const benefits = [
        { title: "Troca grátis e garantia vitalícia", description: "Trocamos a sua maquininha sem você precisar sair de casa", icon: <i class="bi bi-arrow-left-right"></i>},
        { title: "Aqui sua Maquininha não tem aluguel", description: "Com a gente você tem máquina de qualidade sem pesar no bolso", icon:  <i class="bi bi-coin"></i>},
        { title: "Planos Flexíveis", description: "Escolha o plano que melhor se encaixa no seu negócio e mude quando quiser.", icon: <i class="bi bi-piggy-bank"></i>},
        { title: "Recebimento Antecipado", description: "Receba o valor das suas vendas em apenas 1 dia útil.", icon: <i class="bi bi-wallet-fill"></i>},
        { title: "Atendimento Humanizado", description: "Suporte real, sem robôs, diretamente via WhatsApp.", icon: <i class="bi bi-headset"></i>},
        { title: "Conta Digital Gratuita", description: "Gerencie suas finanças com uma conta PJ/PF digital e protegida.", icon: <i class="bi bi-person-check-fill"></i>},
    ];


    const Card = ({ title, description, iconSvg }) => (
        <div className="snap-center sm:w-11/12 min-w-[288px] max-w-[400px]">
            <a disabled={true} target="_self" className="group flex flex-col select-none bg-gray-50 h-full rounded-3xl border-2 border-solid border-gray-200 p-6">
                <div className="flex items-center justify-between">
                    <div className="size-fit text-3xl text-fuchsia-700 mb-5">
                        {icon}
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-start">
                    <h1 className="font-bold text-lg text-gray-900">{title}</h1>
                    <p className="text-gray-900 text-lg">{description}</p>
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

           

            <div class="w-11/12 mx-auto md:grid gap-3 md:grid-cols-3 justify-center sm:flex sm:overflow-x-scroll sm:snap-x sm:snap-mandatory sm:scroll-smooth sm:pb-4 sm:space-x-4">
                    {benefits.map((benefit, index) => (
                        <Card key={index} {...benefit} />
                    ))}
            </div>
            <div class="mt-3 sm:grid md:hidden">
                <p>
                    Veja mais arrastando os cards
                    <span class="scale-125 rotate-12"><i class="bi bi-hand-index-thumb text-fuchsia-700 text-2xl mx-2"></i></span>
                </p>
            </div>
                
           
        </section> 
    )
}

export default Why
