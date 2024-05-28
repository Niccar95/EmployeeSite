<script setup lang="ts">
import type { IEmployee } from "@/models/IEmployee";

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
  <article>
    <h3>{{ props.first_name }}</h3>
    <h4>{{ props.last_name }}</h4>
    <img :src="props.avatar" />
  </article>
</template>
<style scoped></style>
