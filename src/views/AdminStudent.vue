<template>
  <div id="adminStudent">
    <v-container>
      <TiltleBar />
      <v-row>
        <v-col cols="12" md="8">
          <FilterBar />
          <Table />
        </v-col>
        <v-col cols="12" md="4">
          <v-row>
            <v-col>
              <AddUser />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TiltleBar from "@/components/TitleBar";
import FilterBar from "@/components/FilterBar";
import Table from "@/components/Table";
import AddUser from "@/components/AddUser";
export default {
  components: {
    TiltleBar,
    FilterBar,
    Table,
    AddUser,
  },
  name: "adminStudent",
};
</script>

<style></style>
