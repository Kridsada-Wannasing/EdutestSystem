<template>
  <v-navigation-drawer class="ma-0 pa-0 h-100" id="drawer">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title mx-9 mt-6 mb-7">
          <v-img src="./../assets/logo/Logo2.svg" width="120"></v-img>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list>
      <v-list-item
        class="px-4"
        v-for="item in items"
        :key="item.title"
        router
        link
        :to="item.to"
      >
        <v-icon class="px-4">{{ item.icon }}</v-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <div style="margin-top:390px"></div>

    <v-btn block no-gutters @click="logout">Log out</v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "บัญชีนักศึกษา", icon: "mdi-home", to: "/student" },
        { title: "บัญชีอาจารย์", icon: "mdi-file-document", to: "/teacher" },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("admin/logout");
    },
  },
};
</script>

<style lang="scss" scoped>
#drawer {
  background-color: #ffffff;
}
</style>
