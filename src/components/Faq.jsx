import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; 

const faqData = [
  {
    question: "Como faço para pedir minha máquina?",
    answer: "Para se cadastrar, basta clicar no botão 'Peça a sua' no canto superior direito da tela. Você será redirecionado para a página de cadastro, onde deverá preencher os campos com seus dados pessoais, escolher seu plano, máquina e realizar o pagamento, o resto deixa com a gente! Após realizado o pedido, enviaremos todas informações necessárias o seu e-mail e entraremos contato via WhatsApp."
  },
  {
    question: "Quais são os planos e taxas?",
    answer: "Nossos planos e taxas são simples e flexíveis para encaixar em qualquer tipo de negócio. Disponibilizamos 4 planos principais, e mais 4 planos com cashback, todos com recebimento antecipado para 1 dia útil. Criamos nossas taxas de forma justa, transparente e sem enrolação, e o melhor de tudo: você escolhe a que quiser. Confira você mesmo usando nosso simulador. Clique aqui"
  },
  {
    question: "Como posso ser parceiro da Securite Pay? quais requisitos?",
    answer: "Para ser um de nossos parceiros e revender nossos produto, você precisa entrar em contato pelo formulário ou nosso whatsapp e escolher o modelo que deseja adquirir. Para formalizarmos nossa parceria você precisa ser MEI ou ME, sua cidade não ter nenhum Parceiro SecuritePay, ter familiaridade com vendas e suporte e atendimento ao cliente e, por fim, realizar nosso treinamento."
  },
  {
    question: "Qual valor do investimento em franquia da Securite Pay?",
    answer: "O valor do investimento varia de acordo com o modelo desejado pelo pelo parceiro. Atualmente trabalhamos com três modelos. Para saber mais sobre cada modelo de negócio, entre em contato com nossos consultores pelo nosso WhatsApp ou preencha nosso formulário que entraremos em contato em breve."
  },
  {
    question: "É seguro e confiável usar a Securite Pay?",
    answer: "Sim, a SecuritePay é uma fintech de meios de pagamento regulamentada pelo Banco Central do Brasil, de acordo com as circulares nº 3680/13, nº 3682/13, nº 3952/19 e nº 3885/18."
  },
  {
    question: "Como o parceiro da SecuritePay ganha dinheiro?",
    answer: "Nosso parceiro tem diversas fontes de lucro. Através das vendas ou concessão comodata das nossas máquinas de cartão você pode ganhar até 200% de comissão (lucro). Além disso, todo clientes que você indica usar as maquinas ou serviços, o parceiro terá sua comissão. Por fim, e não menos importante, o nosso parceiro terá participação nos lucros dos empréstimos e outros serviços que forem vendidos aos seus clientes podendo lucrar até 10 mil reais mensais."
  },
  {
    question: "Como funciona a maquininha da SecuritePay?",
    answer: "Com nossa máquina de cartão você recebe o valor das suas vendas direto na sua conta bancaria ou conta digital protegida da SecuritePay de acordo com plano escolhido, com atendimento humanizado e sem enrolação. A SecuritePay uma fintech digital, simples e ágil, no qual você não precisa enfrentar a burocracia de um banco tradicional."
  },
  {
    question: "Quais serviços financeiros tenho acesso de forma gratuita ao usar a máquina da SecuritePay?",
    answer: "Ao firmar parceria com a SecuritePay sua empresa poderá contar com um plano de acesso ao crédito* PJ ou PF, contando com serviços de capital de giro, financiamentos, seguros, consórcios além da consultoria e suporte uma equipe especializada com mais de 10 anos de experiência em em produtos financeiros. *Aprovação de crédito sob consulta."
  },
];

function Faq (){
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="grid sm:grid-cols-1 md:grid-cols-2 relative my-6 mx-auto w-11/12 sm:justify-center md:justify-start py-8">
           
            <div className="md:sticky left-0 sm:h-auto md:h-0 lg:h-0 top-4 sm:mx-auto md:mx-0 sm:my-9 md:my-0">
                <div className="grid sm:justify-center justify-start items-center"> 
                    <h2 className="text-3xl font-bold md:text-start sm:text-center">Ficou alguma dúvida? </h2>
                    <p className="text-md text-center md:text-start sm:text-center ">Ficou com alguma dúvida sobre os nossos produtos?</p>
                </div>
            </div>

            <div className="w-full grid justify-center mx-auto text-lg">
                {faqData.map((item, index) => (
                    <div key={index} className="border-0 shadow-lg overflow-hidden">
                        <button className="hover:cursor-pointer w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 focus:outline-none" onClick={() => toggleFAQ(index)}aria-expanded={activeIndex === index}>
                            <span className="text-xl text-left font-bold text-gray-800">
                                {item.question}
                            </span>
                            {activeIndex === index ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                        </button>

                        <div className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-screen opacity-100 p-4 bg-gray-50 border-t border-gray-200' : 'max-h-0 opacity-0'}`}>
                            <p className="text-gray-600">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Faq