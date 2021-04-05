<template>
  <v-app style="background: #fff;">
    <v-main>
      <main-header />
      <router-view :key="$route.path" />
      <main-footer />
    </v-main>
  </v-app>
</template>

<script>
import MainFooter from './MainFooter.vue';
import MainHeader from './MainHeader.vue';

export default {
  name: "Main",
  components: { MainFooter, MainHeader }
};
</script>