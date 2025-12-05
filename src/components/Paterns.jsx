function Paterns (){
    const supporterLogos = [
        { id: 1, src: "/parceiro1.png", alt: 'Apoiador 1' },
        { id: 2, src: "/parceiro2.png", alt: 'Apoiador 2' },
        { id: 3, src: "/parceiro3.png", alt: 'Apoiador 3' },
        { id: 4, src: "/parceiro4.png", alt: 'Apoiador 4' },
        { id: 5, src: "/parceiro5.png", alt: 'Apoiador 5' },
    ];

    return (
        <section class="py-4">
            <div class="md:grid lg:flex gap-3 w-11/12 justify-center mx-auto">
                <div class="md:w-full lg:w-1/2 mb-5">
                    <h2 class="font-bold text-3xl sm:text-center md:text-start">
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
        </section>
    )
}

export default Paterns
