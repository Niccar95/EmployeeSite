<script setup lang="ts">
import type { IEmployee } from "@/models/IEmployee";

interface paginationProp {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IEmployee[];
}

const props = defineProps<paginationProp>();

const emit = defineEmits<{
  (e: "changePage", page: number): void;
}>();

const handlePrevPage = () => {
  if (props.page > 1) {
    emit("changePage", props.page - 1);
  }
};

const handleNextPage = () => {
  if (props.page < props.total_pages) {
    emit("changePage", props.page + 1);
  }
};
</script>
<template>
  <div class="pagination">
    <button @click="handlePrevPage" :disabled="props.page === 1">
      Previous Page
    </button>
    <span>Page {{ props.page }} of {{ props.total_pages }}</span>
    <button
      @click="handleNextPage"
      :disabled="props.page === props.total_pages"
    >
      Next Page
    </button>
  </div>
</template>
<style scoped></style>
