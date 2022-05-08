<template>
  <v-card
    class="mx-auto"
    width="400"
  >
  <!--ONDE PEGAR OS ICONES: https://materialdesignicons.com/ -->
    <v-list>
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

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-currency-usd</v-icon>
        </v-list-item-icon>

        <nuxt-link to="/Emolumentos">Emolumentos</nuxt-link>
      </v-list-item>

      
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
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
nav a {
    padding: 3px;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}
</style>