<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ uAge }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="text" placeholder="Last Name" ref="lastNameInput">
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import {ref, computed, watch} from "vue";

export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const uAge = ref(31);

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], function (newVals, oldVals) {
      console.log('Old: ' + newVals[0]);
      console.log('New: ' + oldVals[0]);
      console.log('Old name: ' + newVals[1]);
      console.log('New name: ' + oldVals[1]);
    });

    function setNewAge() {
      uAge.value = 44;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {uAge: uAge, userName: uName, setAge: setNewAge, firstName: firstName, lastNameInput, setLastName};
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   }
  // }
  // watch: {
  //   age(val){
  //     console.log(val);
  //   }
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>