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
  width: 100%;
  border: solid black;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;

  @media screen and (min-width: 1200px) {
    width: 70%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2em;
  }
}
</style>
