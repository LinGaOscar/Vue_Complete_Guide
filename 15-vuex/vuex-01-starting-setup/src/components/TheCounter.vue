<template>
  <h3>{{ counter }}</h3>
  <button @click="addOne">Add 10</button>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', {value: 10});
      this.$store.commit({
        type: 'increase',
        value: 10,
      });
    }
  }
}
</script>

<style scoped>

</style>