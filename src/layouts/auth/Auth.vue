<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <router-view :key="$route.path" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Auth"
};
</script>