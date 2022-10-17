<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="togglesDeatils">
      {{ detailsAreVisable ? "Hide" : "Show" }}Details
    </button>
    <ul v-if="detailsAreVisable">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  props: ["name", "phoneNumber", "emailAddress"],
  data() {
    return {
      detailsAreVisable: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123456789",
        email: "sss@dff.com",
      },
    };
  },
  methods: {
    togglesDeatils() {
      this.detailsAreVisable = !this.detailsAreVisable;
    },
  },
};
</script>
