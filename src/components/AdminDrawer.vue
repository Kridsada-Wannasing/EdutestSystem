<template>
  <v-navigation-drawer class="m-0" id="drawer">
    <img alt="Vue logo" src="../assets/logo.png" />
    <v-btn
      block
      no-gutters
      style="margin-top:30px"
      :to="{ name: 'AdminTeacher' }"
      >บัญชีอาจารย์</v-btn
    >
    <v-btn block no-gutters :to="{ name: 'AdminStudent' }">บัญชีนักศึกษา</v-btn>

    <div style="margin-top:252px"></div>

    <v-btn block no-gutters>Log out</v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#drawer {
  background-color: #ffffff;
}
</style>
