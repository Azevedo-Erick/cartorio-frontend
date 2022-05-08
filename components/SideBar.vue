<template>
    <nav class="h-screen flex flex-col">
        <nuxt-link to="/Inicio">
            <h2 class="border-b p-5 text-xl">Inicio</h2>
        </nuxt-link>
        <div class="p-3 text-lg flex flex-col mb-4 overflow-y-scroll">

            <nuxt-link to="/ValorPrevio">Valores Previos</nuxt-link>
            <nuxt-link to="/Emolumentos">Emolumentos</nuxt-link>
            <nuxt-link to="/Apresentante">Apresentantes</nuxt-link>
            <nuxt-link to="/Ato">Atos</nuxt-link>
            <nuxt-link to="/Cartorio">Cartorios</nuxt-link>
            <nuxt-link to="/Comarca">Cidades</nuxt-link>
            <nuxt-link to="/Circunscricao">Circunscricões</nuxt-link>
            <nuxt-link to="/Corregedoria">Corregedoria</nuxt-link>
            <nuxt-link to="/Devolucao">Devoluções</nuxt-link>
            <nuxt-link to="/Especialidade">Especialidades</nuxt-link>
            <nuxt-link to="/Estado">Estados</nuxt-link>
            <nuxt-link to="/Indenizacao">Indenizações</nuxt-link>
            <nuxt-link to="/MotivoDevolucao">Motivos de Devoluções</nuxt-link>
            <nuxt-link to="/Protocolo">Protocolos</nuxt-link>
            <nuxt-link to="/Status">Status</nuxt-link>
            <nuxt-link to="/Titular">Titulares</nuxt-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {}
    },
    computed: {
       
    },
    methods: {
    },
}
</script>

<style scoped>
nav {
    background-color: #333533;
}
nav {
    color: #ffffff;
}
nav a {
    padding: 3px;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}
</style>
