<script setup lang="ts">
import type { IEmployeeState } from "@/models/IEmployeeState";
import { allEmployeeData } from "@/services/EmployeeService";
import { onMounted, ref } from "vue";
import Employees from "./Employees.vue";

const employeeState = ref<IEmployeeState>({
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [],
});

onMounted(async () => {
  employeeState.value = await allEmployeeData();
  console.log(employeeState.value.data);
});
</script>

<template>
  <h1>Meet our Team</h1>
  <Employees :data="employeeState.data"></Employees>
</template>

<style scoped></style>
