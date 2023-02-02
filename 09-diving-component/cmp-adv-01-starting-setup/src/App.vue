<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader/> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-gaols')">Manage Goals</button>
    <!--    <active-goals v-if="selectedComponent==='active-goals'"></active-goals>-->
    <!--    <manage-gaols v-if="selectedComponent==='manage-gaols'"></manage-gaols>-->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import UserInfo from './components/UserInfo.vue';
// import BadgeList from './components/BadgeList.vue';
// import CourseGoals from "@/components/CourseGoals";
import ActiveGoals from "@/components/ActiveGoals";
import ManageGaols from "@/components/ManageGoals";

export default {
  components: {
    //'the-header' : TheHeader
    //TheHeader : TheHeader
    TheHeader,
    ActiveGoals,
    ManageGaols
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>