<template>
  <v-container id="home" fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0" cols="2"><AdminDrawer /></v-col>
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
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
