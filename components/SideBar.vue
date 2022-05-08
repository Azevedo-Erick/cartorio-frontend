<template>
  <v-card
    class="mx-auto"
    width="400"
  >
  <!--ONDE PEGAR OS ICONES: https://materialdesignicons.com/ -->
    <v-list class="text">
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
            <v-list-item-title v-text="child.title"></v-list-item-title>
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
              { title: 'Especialidade' },
              { title: 'Emolumentos' },
              { title: 'Atos' },
          ],
          title: 'Espécie Notarial',
        },
        {
          action: 'mdi-hubspot',
          items: [
              { title: 'Corregedorias' },
              { title: 'Comarcas' },
              { title: 'Circunscrições' },
              { title: 'Cartórios' },
          ],
          title: 'Unidades',
        },
        {
          action: 'mdi-home-city',
          items: [
              { title: 'Cidades' },
              { title: 'Estados' },
          ],
          title: 'Local',
        },
      ],
    }),
  }
</script>


<style scoped>
.nav {
    background-color: #333533;
}
nav {
    color: #ffffff;
}
.text {
    padding: 3px;
    text-decoration: none;
    font-weight: bold;
    /* color: white; */
    font-family: 'Roboto', sans-serif;
}
</style>