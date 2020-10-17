<template>
  <v-row>
    <v-col>
      <v-data-table
        class="rounded-xl"
        :headers="headers"
        :items="students"
        :items-per-page="5"
      >
        <template v-slot:top>
          <v-toolbar flat color="white" class="rounded-xl">
            <h3 class="color-dark-blue pl-3">
              รายชื่อนักศึกษา {{ students.length }} คน
            </h3>
            <v-spacer></v-spacer>
            <DialogAddStudentTable />
          </v-toolbar>
        </template>
        <template v-slot:item.fullName="{ item }">
          <span>{{ item.firstName }} {{ item.lastName }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small @click="deleteStudent(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import DialogAddStudentTable from "@/components/DialogAddStudentTable";
import { mapState } from "vuex";
export default {
  components: {
    DialogAddStudentTable,
  },
  data() {
    return {
      headers: [
        {
          text: "Student ID",
          align: "start",
          sortable: false,
          value: "studentId",
        },
        { text: "Name", value: "fullName", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Faculty", value: "faculty", sortable: false },
        { text: "Department", value: "department", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    ...mapState("student", ["students"]),
  },
  methods: {
    deleteStudent(item) {
      confirm("ต้องการลบรายชื่อนักศึกษาหรือไม่") &&
        this.$store
          .dispatch("student/deleteStudent", item.studentId)
          .then(() => alert("ลบรายชื่อนักศึกษาเรียบร้อย"))
          .catch((error) => alert(error));
    },
  },
};
</script>

<style></style>
