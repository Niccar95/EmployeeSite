<script setup lang="ts">
interface oneEmployeeProp {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const props = defineProps<oneEmployeeProp>();

defineEmits<{
  (
    e: "showEmployee",
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
  ): void;
}>();
</script>
<template>
  <article class="employeeCard">
    <h3>{{ props.first_name }}</h3>
    <h4>{{ props.last_name }}</h4>
    <img :src="props.avatar" />
    <p>{{ props.email }}</p>
  </article>
</template>
<style scoped>
.employeeCard {
  width: 400px;
  padding: 2em;
  border: solid black 1px;
}
</style>
