<template>
  <v-card class="px-4">
    <v-row>
      <v-col><p>เพิ่มรายชื่อ</p></v-col>
      <v-col><DialogTable /></v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field solo rounded dense label="ชื่อ"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field solo rounded dense label="นามสกุล"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field solo rounded dense label="รหัสนักศึกษา"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field solo rounded dense label="อีเมล"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field solo rounded dense label="คณะ"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field solo rounded dense label="ภาควิชา"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field solo rounded dense label="กลุ่มเรียน"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-btn>บันทึก</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// import xlsx from "xlsx";
import DialogTable from "@/components/DialogTable";

export default {
  components: {
    DialogTable,
  },
  data() {
    return {
      uploadFile: null,
      dataTable: null,
    };
  },
  methods: {
    // getDataInExcel() {
    //   const wb = xlsx.readFile(uploadFile);
    //   const ws = wb.Sheets["data"];
    //   let data = xlsx.utils.sheet_to_json(ws);
    //   this.dataTable = data;
    //   //   console.log(data);
    //   //   data = JSON.stringify(data);
    //   //   console.log("stringify: " + data);
    //   //   data = JSON.parse(data);
    //   //   // console.log(ws);
    //   //   console.log(data);
    // },
  },
};
</script>

<style></style>
