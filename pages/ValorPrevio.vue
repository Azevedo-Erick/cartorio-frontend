<template>
    <div>
        <div class="">
            <MainTitle :title="'Cadastro de valor previo'" />
            <SubTitle :title="'Protocolo'" class="subtitle" />
            <div class="flex flex-row justify-evenly">
                <FormulateInput
                    label-class="label-valor-previo"
                    wrapper-class="mt-1 relative rounded-md "
                    input-class="shadow-xl  border-b border-t border-r border-l ring-black shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    type="text"
                    label="Numero Protocolo"
                    name="numeroProtocolo"
                    placeholder="1234"
                />
                <FormulateInput
                    label-class="label-valor-previo"
                    input-class="shadow-xl  border-b border-t border-r border-l shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    type="date"
                    name="dataEntrada"
                    label="Data de Entrada"
                />
                <FormulateInput
                    input-class="shadow-xl  border-b border-t border-r border-l shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    label-class="label-valor-previo"
                    type="number"
                    label="Valor Recolhido"
                    name="valorRecolhido"
                    placeholder="R$ 500,00"
                />

                <FormulateInput
                    type="text"
                    label-class="label-valor-previo"
                    input-class="shadow-xl  border-b border-t border-r border-l  shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    label="Exame Cálculo"
                    name="numeroProtocolo"
                    placeholder="1234"
                />
            </div>

            <SubTitle :title="'Apresentante'" class="subtitle" />
            <div class="flex flex-row justify-between w-3/5">
                <FormulateInput
                    label-class="label-valor-previo"
                    input-class="shadow-xl  border-b border-t border-r border-l  shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    type="text"
                    label="CPF"
                    placeholder="000.000.000-00"
                    name="cpfApresentante"
                />
                <FormulateInput
                    label-class="label-valor-previo"
                    input-class="shadow-xl  border-b border-t border-r border-l  shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    type="text"
                    label="Nome"
                    name="nomeApresentante"
                    placeholder="Nome do Apresentante"
                />
            </div>
            <SubTitle :title="'Ato'" class="subtitle" />
            <div class="flex flex-row justify-between w-2/5">
                <FormulateInput
                    label-class="label-valor-previo"
                    input-class="shadow-xl w-full border-b border-t border-r border-l  shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    type="select"
                    label="Selecione o ato"
                    name="indenizacao"
                    :options="['1', '2', '3', '4']"
                />
                <FormulateInput
                    label-class="label-valor-previo"
                    input-class="shadow-xl  border-b border-t border-r border-l  shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    type="number"
                    label="Valor do ato"
                    name="valorAto"
                    placeholder="1234"
                />
            </div>
            <SubTitle :title="'Valor Prévio'" class="subtitle" />
            <div class="flex flex-row justify-between w-3/5">
                <FormulateInput
                    label-class="label-valor-previo"
                    input-class="shadow-xl w-full  border-b border-t border-r border-l shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    type="select"
                    label="Houve devolução?"
                    name="devolucao"
                    :options="['Sim', 'Não']"
                />

                <FormulateInput
                    label-class="label-valor-previo"
                    input-class="shadow-xl  border-b border-t border-r border-l shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    type="number"
                    label="Valor"
                    placeholder="1234"
                    name="valorDevolucao"
                />

                <FormulateInput
                    label-class="label-valor-previo"
                    type="select"
                    input-class="shadow-xl w-full border-b border-t border-r border-l shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    label="Motivo da devolução"
                    name="motivoDevolucao"
                    :options="['Sim', 'Não']"
                />
            </div>

            <SubTitle :title="'Opção do Cliente'" class="subtitle" />
            <div class="flex flex-row">
                <FormulateInput
                    label-class="label-valor-previo"
                    type="select"
                    input-class="shadow-xl w-full border-b border-t border-r border-l shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    label="Deixar o valor para um novo ato?"
                    name="valorParaNovoAto"
                    :options="['Sim', 'Não']"
                />
            </div>
            <SubTitle :title="'Status'" class="subtitle" />
            <div class="flex flex-row">
                <FormulateInput
                    label-class="label-valor-previo"
                    type="select"
                    input-class="shadow-xl w-full  border-b border-t border-r border-l shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
                    label="Descrição do status"
                    name="descricao_status"
                    :options="['Desc A', 'Desc B', 'Desc C', 'Desc D']"
                />
            </div>
        </div>
    </div>
</template>

<script>
import MainTitle from '~/components/MainTitle.vue'
import SubTitle from '~/components/SubTitle.vue'
export default {
    components: { MainTitle, SubTitle },
    layout: 'DefaultLayout',
}
</script>

<style scoped>
.subtitle{
    margin: 20px 0;
}
.subtitle::after {
    content: '';
    display: flex;
    align-self: center;
    width: 100%;
    height: 1px;
    left: 10px;
    background-color: #b0b0b0;
    
}
</style>
