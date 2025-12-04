function Footer (){
    return (
        <section>
            <div class="grind w-full text-center py-4 my-6 mx-auto justify-center">
                <button class="px-7 border-neutral-400 rounded-4xl border-1 py-3 font-semibold hover:cursor-pointer hover:scale-105 hover:border-fuchsia-700">
                    <i class="text-xl bi bi-arrow-up-short"></i>    
                    Subir ao início
                </button>
            </div>
            <footer class="w-full grid grid-cols-1 justify-center py-8 bg-gray-900 text-neutral-100 text-sm">
                <div class="w-11/12 mx-auto my-8">
                    <img width="200" class="sm:mx-auto md:mx-auto lg:mx-0" src="/logo-rodape.png" alt="Imagem da logomarca da SecuritePay"/>
                </div>

                <div class="w-11/12 mx-auto">
                    <div class="flex flex-col md:flex-row md:space-x-8">
                        <p>CNPJ: 50.501.450/0001-36</p>
                        <p>rua Praia de Genipabú, 360, Natal, Rio Grande do Norte, CEP: 59090-010</p>
                    </div>
                    <p class="mt-4">A SecuritePay é uma fintech de meios de pagamento regulamentada pelo Banco Central do Brasil, de acordo com as circulares nº 3680/13, nº 3682/13, nº 3952/19 e nº 3885/18.</p>
                    <div class="mt-4 pt-4 border-t border-gray-300">
                        <p>© SecuritePay Fintech LTDA 2025. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </section>

    )
}
export default Footer;


