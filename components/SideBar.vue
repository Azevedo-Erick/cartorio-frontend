<template>
    <nav class="h-screen flex flex-col w-full">
        {{currentRouteName}}
        <nuxt-link to="">Inicio</nuxt-link>
        <nuxt-link to="/ValorPrevio">Valor Previo</nuxt-link>
        <nuxt-link to="/Emolumentos">Emolumentos</nuxt-link>
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
    methods: {},
}
</script>

<style scoped>
nav {
  background-color: #333533;
  padding: 15px;
}
nav{

    color: #ffffff;
}
nav a {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  padding: 0 5px 7px;
}
</style>
