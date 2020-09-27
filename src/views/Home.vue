<template>
  <v-container id="home" fluid>
    <v-row>
      <v-col cols="2"><AdminDrawer /></v-col>
      <v-col cols="10">
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

<style lang="scss">
#home {
  background: linear-gradient(to bottom, #033a5f 50%, #eff2f8 50%);
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
