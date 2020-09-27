<template>
  <div>
    <v-btn
      color="primary"
      class="text-none"
      outlined
      rounded
      depressed
      :loading="isSelecting"
      @click.stop="onButtonClick"
    >
      <v-icon left v-text="'mdi-paperclip'" small class="color-blue"></v-icon
      >{{ buttonText }}
    </v-btn>
    <input
      ref="uploader"
      class="d-none"
      type="file"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      @input="getDataInExcel"
    />
    <v-dialog v-model="dialog" width="1000">
      <v-data-table
        :headers="headers"
        :items="dataTable"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>{{ dataTable.length }} คน</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn small outlined color="success" dark class="mb-2">Save</v-btn>
            <v-btn
              small
              outlined
              color="warning"
              dark
              class="mb-2"
              @click="cancel"
              >Cancel</v-btn
            >
          </v-toolbar>
        </template>
      </v-data-table>
    </v-dialog>
  </div>
</template>

<script>
import xlsx from "xlsx";
export default {
  data() {
    return {
      headers: [
        {
          text: "Student ID",
          align: "start",
          sortable: false,
          value: "studentId",
        },
        { text: "Name", value: "firstName" },
        { text: "Surname", value: "lastName" },
        { text: "Email", value: "email" },
        { text: "Faculty", value: "faculty" },
        { text: "Department", value: "department" },
        { text: "Actions", value: "actions" },
      ],
      selectedFile: null,
      dataTable: [],
      dialog: false,
      defaultButtonText: "upload excel file",
      isSelecting: false,
    };
  },
  computed: {
    buttonText() {
      return this.selectedFile
        ? this.selectedFile.name
        : this.defaultButtonText;
    },
  },
  methods: {
    onButtonClick() {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
          this.dialog = !this.dialog;
        },
        { once: true }
      );

      this.$refs.uploader.click();
    },
    getDataInExcel(event) {
      this.selectedFile = event.target.files[0];
      let reader = new FileReader();
      reader.onload = () => {
        let fileData = reader.result;
        let wb = xlsx.read(fileData, { type: "binary" });
        let wsname = wb.SheetNames[0];
        this.dataTable = xlsx.utils.sheet_to_json(wb.Sheets[wsname]);
        console.log(this.dataTable);
      };
      reader.readAsBinaryString(this.selectedFile);
    },
    deleteItem(item) {
      const index = this.dataTable.indexOf(item);
      this.dataTable.splice(index, 1);
    },
    async save() {
      const response = await this.$store.dispatch(
        "admin/registerStudents",
        this.dataTable
      );
      alert(`${response.status}: ${response.message}`);
      this.dialog = false;
    },
    cancel() {
      this.uploadFile = null;
      this.selectedFile = null;
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style></style>
