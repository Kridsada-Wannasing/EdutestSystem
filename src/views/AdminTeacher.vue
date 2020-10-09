<template>
  <div id="adminTeacher" class="white--text">
    <v-container>
      <v-row>
        <v-col cols="4">
          <h1>บัญชีอาจารย์</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <p>{{ admin }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <TeacherTable />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TeacherTable from "@/components/TeacherTable";
export default {
  components: {
    TeacherTable,
  },
  name: "adminTeacher",
  computed: {
    admin() {
      return JSON.parse(localStorage.getItem("admin")).firstName;
    },
  },
};
</script>

<style></style>
