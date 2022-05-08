<template>
  <v-card
    class="mx-auto"
    width="400"
    dark
  >
  <!--ONDE PEGAR OS ICONES: https://materialdesignicons.com/ -->
    <v-list class="text" width="100%">
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <nuxt-link to="/">Início</nuxt-link>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-currency-usd</v-icon>
        </v-list-item-icon>

        <nuxt-link to="/ValorPrevio">Valores Previos</nuxt-link>
      </v-list-item>

<!-- simulando o dropdown aqui -->
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
        >
          <v-list-item-content>
            <nuxt-link :to='`${child.url}`' >
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          action: 'mdi-bank',
          items: [
              { title: 'Especialidade',url:"Especialidade" },
              { title: 'Emolumentos',url:"Emolumento" },
              { title: 'Atos', url:"Ato"},
          ],
          title: 'Espécie Notarial',
        },
        {
          action: 'mdi-hubspot',
          items: [
              { title: 'Corregedorias',url:"Corregedoria" },
              { title: 'Comarcas',url:"Comarca" },
              { title: 'Circunscrições',url:"Circunscricao" },
              { title: 'Cartórios',url:"Cartorio" },
          ],
          title: 'Unidades',
        },
        {
          action: 'mdi-home-city',
          items: [
              { title: 'Cidades',url:"Cidade" },
              { title: 'Estados',url:"Estado" },
          ],
          title: 'Local',
        },
      ],
    }),
  }
</script>


<style scoped>
.text {
    padding: 3px;
    text-decoration: none;
    font-weight: bold;
    /* color: white; */
    font-family: 'Roboto', sans-serif;
}
</style>