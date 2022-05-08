<template>
    <div class="min-h-full">
        <MainTitle :title="'Emolumento'" />
        <div class="flex flex-row space-between">

        <FormulateInput
            label-class="label-valor-previo"
            type="select"
            input-class="shadow-xl  shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
            label="Descrição"
            name="descricao_emolumento"
            :options="['Desc A', 'Desc B', 'Desc C', 'Desc D']"
        />
        <FormulateInput
            label-class="label-valor-previo"
            type="select"
            input-class="shadow-xl  shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
            label="Especialidade"
            name="especialidade_oficio_emolumento"
            :options="['Especialidade A', 'Especialidade B', 'Especialidade C', 'Especialidade D']"
        />
        <FormulateInput
            label-class="label-valor-previo"
            type="month"
            input-class="shadow-xl  shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
            label="Ano"
            name="ano_emolumento"
            
        />
        </div>
        <MainTitle :title="'Atos do Emolumento'" />
        <table
            class="table-fixed w-full border-b border-t border-r border-l h-4/6"
        >
            <thead class="border-b">
                <th class="w-3/4 border-r p-2">Descrição do ato</th>
                <th class="w-1/4 p-2">Valor</th>
            </thead>
            <tbody>
                <tr class="max-h-2">
                    <td class="border-r p-2">Lorem Ipsum</td>
                    <td class="p-2">90</td>
                </tr>
                <tr class="max-h-2">
                    <td class="border-r p-2">Lorem Ipsum</td>
                    <td class="p-2">90</td>
                </tr>
                <tr class="max-h-2">
                    <td class="border-r p-2">Lorem Ipsum</td>
                    <td class="p-2">90</td>
                </tr>
                <tr class="max-h-2">
                    <td class="border-r p-2">Lorem Ipsum</td>
                    <td class="p-2">90</td>
                </tr>
                <tr class="max-h-2">
                    <td class="border-r p-2">Lorem Ipsum</td>
                    <td class="p-2">90</td>
                </tr>
                <tr class="max-h-2">
                    <td class="border-r p-2">Lorem Ipsum</td>
                    <td class="p-2">90</td>
                </tr>
                <tr class="max-h-2">
                    <td class="border-r p-2">Lorem Ipsum</td>
                    <td class="p-2">90</td>
                </tr>
                <tr class="max-h-2">
                    <td class="border-r p-2">Lorem Ipsum</td>
                    <td class="p-2">90</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import MainTitle from '~/components/MainTitle.vue'
export default {
    components: { MainTitle },
    layout: 'DefaultLayout',
}
</script>

<style scoped></style>
