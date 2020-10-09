<template>
  <v-row>
    <v-col>
      <v-data-table
        class="rounded-xl"
        :headers="headers"
        :items="teachers"
        :items-per-page="5"
      >
        <template v-slot:top>
          <v-toolbar flat color="white" class="rounded-xl">
            <h3 class="color-dark-blue pl-3">
              รายชื่ออาจารย์ {{ teachers.length }} คน
            </h3>
            <v-spacer></v-spacer>
            <DialogAddTeacherTable />
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small @click="deleteTeacher(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import DialogAddTeacherTable from "@/components/DialogAddTeacherTable";
import { mapState } from "vuex";
export default {
  components: {
    DialogAddTeacherTable,
  },
  data() {
    return {
      headers: [
        { text: "Name", align: "start", value: "firstName", sortable: false },
        { text: "Surname", value: "lastName", sortable: false },
        { text: "Faculty", value: "faculty", sortable: false },
        { text: "Department", value: "department", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    ...mapState("teacher", ["teachers"]),
  },
  methods: {
    deleteTeacher(item) {
      confirm("ต้องการลบรายชื่ออาจารย์หรือไม่") &&
        this.$store.dispatch("teacher/deleteTeacher", item.teacherId);
    },
  },
};
</script>

<style></style>
