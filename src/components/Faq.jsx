import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; 
import $ from 'jquery'; 

function Faq (){
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const [faqData, setFaqData] = useState([]);
    useEffect(() => {
        $.ajax({
            url: "https://api.securitepay.com.br/endpoint/GET_faqs.php",
            method: 'GET',
            dataType: 'json', 
            success: function(data) {
                setFaqData(data);
            },
            error: function(textStatus) {
                console.error("Erro na API com jQuery:", textStatus);
            }
        });     
        return () => {
        };
    }, []); 

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