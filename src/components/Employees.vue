<script setup lang="ts">
import type { IEmployee } from "@/models/IEmployee";
import Employee from "./Employee.vue";

interface EmployeesProp {
  data: IEmployee[];
}

const props = defineProps<EmployeesProp>();
</script>
<template>
  <section id="employeeSection">
    <Employee
      :avatar="employee.avatar"
      :email="employee.email"
      :first_name="employee.first_name"
      :last_name="employee.last_name"
      :id="employee.id"
      v-for="employee in props.data"
      :key="employee.id"
    ></Employee>
  </section>
</template>
<style scoped>
#employeeSection {
  width: 80%;
  border: solid black;
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
}
</style>
