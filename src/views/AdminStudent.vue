<template>
  <div id="adminStudent" class="white--text">
    <v-container>
      <v-row>
        <v-col cols="4">
          <h1>บัญชีนักศึกษา</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <p>{{ admin }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <StudentTable />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StudentTable from "@/components/StudentTable";
export default {
  components: {
    StudentTable,
  },
  name: "adminStudent",
  computed: {
    admin() {
      return JSON.parse(localStorage.getItem("admin")).firstName;
    },
  },
};
</script>

<style></style>
