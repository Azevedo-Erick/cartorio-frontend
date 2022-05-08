<template>
    <div @click="getEstados()">aaaa</div>
</template>

<script>
export default {
    layout: 'DefaultLayout',
    middleware: 'auth',
    methods: {
        async getEstados() {
            try {
                await this.$axios.$get('/estados', {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('acess_token')}`,
                    },
                })
            } catch {
                console.log('erro')
            }
        },
    },
}
</script>

<style scoped></style>
