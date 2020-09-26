<template>
  <v-container id="home" class="m-0">
    <v-row class="m-0">
      <v-col cols="3"><AdminDrawer /></v-col>
      <v-col cols="9">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdminDrawer from "@/components/AdminDrawer";
export default {
  name: "home",
  components: {
    AdminDrawer,
  },
};
</script>

<style></style>
