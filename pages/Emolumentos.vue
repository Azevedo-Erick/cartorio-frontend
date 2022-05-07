<template>
    <div>
        <MainTitle :title="'Emolumento'" />
        <FormulateInput
            label-class="label-valor-previo"
            type="select"
            input-class="shadow-xl  shadow-gray-700 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  rounded-3xl"
            label="Descrição Emolumento"
            name="descricao_emolumento"
            :options="['Desc A', 'Desc B', 'Desc C', 'Desc D']"
        />
        <MainTitle :title="'Atos do Emolumento'" />
        <table
            class="table-fixed w-full border-b border-t border-r border-l h-4/6"
        >
            <thead class="border-b">
                <th class="w-3/4 border-r p-2">Descrição do ato</th>
                <th class="w-1/4 p-2">Valor</th>
            </thead>
            <tbody>
                <tr>
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
