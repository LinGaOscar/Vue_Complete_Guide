<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggles Favorite</button>
    <button @click="toggleDeatils">
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
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  emits: ['toggle-favorite'],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('Id is missing...')
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisable: false,
    };
  },
  methods: {
    toggleDeatils() {
      this.detailsAreVisable = !this.detailsAreVisable;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
