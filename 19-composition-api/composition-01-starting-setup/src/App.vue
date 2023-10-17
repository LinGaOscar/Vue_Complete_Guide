<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="text" placeholder="Last Name" v-model="lastName">
    </div>
  </section>
</template>

<script>
import {reactive, ref, computed} from "vue";

export default {
  setup() {
    // const uName = ref('Maximilian');
    // const uAge = ref(31);
    const firstName = ref('');
    const lastName = ref('');

    const user = reactive({
      name: 'Maximilian',
      age: 32
    })

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    function setNewAge() {
      user.age = 44;
    }

    return {user: user, userName: uName, setAge: setNewAge, firstName: firstName, lastName: lastName};
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