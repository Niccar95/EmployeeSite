<script setup lang="ts">
import type { IEmployee } from "@/models/IEmployee";

interface EmployeesProp {
  data: IEmployee[];
}

const props = defineProps<EmployeesProp>();
</script>
<template>
  <ul>
    <li v-for="employee in props.data">{{ employee.first_name }}</li>
  </ul>
</template>
<style scoped></style>
