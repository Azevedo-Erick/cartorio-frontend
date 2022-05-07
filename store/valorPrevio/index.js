export default {
    getValoresPrevios() {
      return this.$axios.$get('valorPrevio');
    },
    deleteValorPrevio(context, id) {
      return this.$axios.$delete(`valorPrevio/${id}`)
    },
    updateValorPrevio(context, { id, data }) {
      return this.$axios.$patch(`valorPrevio/${id}`, data)
    },
    addValorPrevio(context, data) {
      return this.$axios.$post('valorPrevio', data)
    },
  }