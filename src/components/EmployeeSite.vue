<script setup lang="ts">
import type { IEmployeeState } from "@/models/IEmployeeState";
import { allEmployeeData } from "@/services/EmployeeService";
import { onMounted, ref } from "vue";
import Employees from "./Employees.vue";
import Pagination from "./Pagination.vue";

const employeeState = ref<IEmployeeState>({
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [],
});

onMounted(async () => {
  employeeState.value = await allEmployeeData();
});

const handlePageChange = async (page: number) => {
  employeeState.value = await allEmployeeData(page);
};
</script>

<template>
  <header>
    <img src="./icons/original.png" />
  </header>

  <h1>Meet our Team</h1>
  <Employees :data="employeeState.data"></Employees>
  <Pagination
    :page="employeeState.page"
    :per_page="employeeState.per_page"
    :total="employeeState.total"
    :total_pages="employeeState.total_pages"
    :data="employeeState.data"
    @changePage="handlePageChange"
  ></Pagination>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 5em;
  width: 100%;

  img {
    width: 155px;
  }
}

h1 {
  text-align: center;
  font-weight: 900;
  text-transform: capitalize;
}
</style>
