function Indication (){
    return(
       <section class="grid justify-center xs:w-full md:w-11/12 text-center mx-auto py-8 my-8 md:my-16">
            <h2 class="xs:text-2xl sm:text-4xl sm:mb-6 md:mb-12">
                Muito além de uma maquininha
            </h2>

            <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xs:w-full sm:w-11/12 mx-auto justify-center xs:bg-gray-50 sm:bg-gray-50 md:bg-gray-50 lg:bg-[#2C0050] sm:px-0 md:px-0 lg:px-5 p-10 rounded-2xl text-lg">
                <div class="w-full bg-gray-50 rounded-2xl text-lg py-8 px-8 sm:px-3 md:px-5 border-gray-200 lg:border-[#2C0050] border-3 text-start hover:cursor-pointer hover:scale-105 hover:border-fuchsia-700">
                    <h3 class="xs:text-2xl md:text-3xl font-semibold mb-4 mt-2">
                        Seja um parceiro e <span class="text-fuchsia-700">ganhe até R$340</span> por máquina indicada
                    </h3>
                    <p class="text-lg mb-8">Seu cliente ganha 5% de desconto nas máquinas e você ganha dinheiro pelas indicações</p>
                    <a href="#" class="text-fuchsia-700 font-semibold" target="_blank">Chama no Whatsapp <i class="bi bi-whatsapp"></i></a>
                </div>

                <div class="flex flex-col justify-center items-center mx-auto text-center">
                    <img src="/designers/homem-celular.png" alt="Man holding smartphone with app interface displayed" class="w-68 h-68 object-contain scale-200 mx-auto xs:hidden lg:grid"/>
                </div>
            </div>
        </section>
    )
}
export default Indication