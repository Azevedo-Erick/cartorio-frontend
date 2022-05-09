<template>
    <div data-app>
        <v-card>
            <v-card-title>
                Cidades
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="pesquisa"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                 <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                            @click="abrirDialogInclusao()"
                        >
                            Adicionar Estado
                        </v-btn>
            </v-card-title>
            <v-data-table
                :headers="dataTableHeaders"
                :items="cidades"
                :items-per-page="14"
                class="elevation-1"
                group-by="estado.nome"
                loading
                loading-text="Carregando..."
                :search="pesquisa"

            >
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
export default {
    layout: 'DefaultLayout',
    middleware: 'auth',
    data() {
        return {
            cidades: [],
            pesquisa:"",
            dataTableHeaders: [
                {
                    text: 'Nome',
                    value: 'nome',
                },
                {
                    text: 'Estado',
                    value: 'estado.nome',
                },
                {
                    text: 'Sigla',
                    value: 'estado.sigla',
                },
            ],
        }
    },
    async mounted() {
        this.cidades = await this.getCidades()
    },
    methods: {
        async getCidades() {
            try {
                return await this.$axios.$get('/cidades', {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem(
                            'acess_token'
                        )}`,
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
