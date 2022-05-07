<template>
    <nav class="h-screen flex flex-col">
        <h2 class="border-b p-5 text-xl">{{ currentRouteName }}</h2>
        <div class="p-3 text-lg flex flex-col ">

            <nuxt-link to="/Inicio">Inicio</nuxt-link>
            <nuxt-link to="/ValorPrevio">Valor Previo</nuxt-link>
            <nuxt-link to="/Emolumentos">Emolumentos</nuxt-link>
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
        currentRouteName() {
            return this.$route.name
        },
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
