<template>
    <div data-app>
      <v-card>
         <v-card-title>
                Estados
                <v-spacer></v-spacer>
                 <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            @click="abrirDialogInclusao()"
                        >
                            Adicionar Estado
                        </v-btn>
            </v-card-title>
        <v-data-table
            :headers="dataTableHeaders"
            :items="estados"
            :items-per-page="14"
            class="elevation-1"
            loading
            loading-text="Carregando..."
        >
  
    
            <template #item="row">
                <tr>
                    <td>{{ row.item.nome }}</td>
                    <td>{{ row.item.sigla }}</td>
                    <td>
                        <v-icon
                            small
                            class="mr-2"
                            @click="abrirDialogEditar(row.item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteItem(row.item)">
                            mdi-delete
                        </v-icon>
                    </td>
                </tr>
            </template>
        </v-data-table>
      </v-card>
        <v-dialog v-model="exibindoDialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="text-h5"
                        >{{
                            incluindo ? 'Cadastrando' : 'Editando'
                        }}
                        Estado</span
                    >
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-col>
                            <FormulateForm v-model="formValues">
                                <FormulateInput
                                    label-class="title"
                                    input-class="border-b w-full border-gray-400 w-4/5 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  "
                                    wrapper-class="my-2"
                                    type="text"
                                    label="Nome"
                                    name="nome"
                                    validation="required"
                                    :validation-messages="{
                                        required: 'O campo não pode ser vazio',
                                    }"
                                    placeholder="Insira o nome do estado"
                                />

                                <FormulateInput
                                    label-class="title"
                                    input-class="border-b w-full border-gray-400 w-4/5 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  "
                                    wrapper-class="my-2"
                                    type="text"
                                    label="Sigla"
                                    name="sigla"
                                    validation="required"
                                    :validation-messages="{
                                        required: 'O campo não pode ser vazio',
                                    }"
                                    placeholder="Insira a sigla do estado"
                                />
                            </FormulateForm>
                        </v-col>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="exibindoDialog = false"
                    >
                        Fechar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="salvar()">
                        Salvar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    layout: 'DefaultLayout',
    middleware: 'auth',
    data() {
        return {
            estados: [],
            formValues: {
                nome: '',
                sigla: '',
            },
            incluindo: false,
            exibindoDialog: false,
            dataTableHeaders: [
                {
                    text: 'Nome',
                    value: 'nome',
                },
                {
                    text: 'Sigla',
                    value: 'sigla',
                },
                {
                    text: 'Ações',
                    value: 'actions',
                    sortable: false,
                },
            ],
        }
    },
    async mounted() {
        this.estados = await this.getEstados()
    },
    methods: {
        async getEstados() {
            try {
                return await this.$axios.$get('/estados', {
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
        abrirDialogEditar(item) {
            this.incluindo = false
            this.exibindoDialog = true
            this.formValues = item
        },
        abrirDialogInclusao() {
            this.incluindo = true
            this.exibindoDialog = true
        },
        salvar() {
          console.log(this.formValues)
            if (this.incluindo) {
                this.insertItem()
            } else {
                this.editarItem()
            }
        },
        async insertItem() {
          try {
                const a = await this.$axios.$post(
                    `/estados/`,
                    {
                        data: {
                            dadosEstado: this.formValues,
                        },
                        headers: {
                            Authorization: `Bearer ${window.localStorage.getItem(
                                'acess_token'
                            )}`,
                        },
                    }
                )
                console.log(a)
            } catch (e) {
                console.log(e)
            }
        },
        async editarItem() {
          
            try {
               await this.$axios.$delete(
                    `/estados/${this.formValues.idEstado}`,
                    {
                        data: {
                            dadosEstado: this.formValues,
                        },
                        headers: {
                            Authorization: `Bearer ${window.localStorage.getItem(
                                'acess_token'
                            )}`,
                        },
                    }
                )
            } catch (e) {
                console.log(e)
            }
        },
        async deleteItem(item) {
            try {
                await this.$axios.$delete(
                    `/estados/${item.idEstado}`,
                    {
                        headers: {
                            Authorization: `Bearer ${window.localStorage.getItem(
                                'acess_token'
                            )}`,
                        },
                    }
                )
            } catch (e) {
                console.log(e)
            }
        },
    },
}
</script>

<style scoped></style>
