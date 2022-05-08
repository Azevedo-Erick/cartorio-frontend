export default {
    getEstados() {
      return this.$axios.$get('/estados',{
      Headers:{
        'Authorization':this.$auth.strategy.token.get(),
      }});
    },
    deleteEstado(context, id) {
      return this.$axios.$delete(`valorPrevio/${id}`)
    },
    updateEstado(context, { id, data }) {
      return this.$axios.$patch(`valorPrevio/${id}`, data)
    },
    addEstado(context, data) {
      return this.$axios.$post('valorPrevio', data)
    },
  }