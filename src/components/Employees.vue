<script setup lang="ts">
import type { IEmployee } from "@/models/IEmployee";
import Employee from "./Employee.vue";

interface EmployeesProp {
  data: IEmployee[];
}

const props = defineProps<EmployeesProp>();
</script>
<template>
  <Employee
    :avatar="employee.avatar"
    :email="employee.email"
    :first_name="employee.first_name"
    :last_name="employee.last_name"
    :id="employee.id"
    v-for="employee in props.data"
    :key="employee.id"
  ></Employee>
</template>
<style scoped></style>
