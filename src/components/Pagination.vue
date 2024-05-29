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
  <section id="pagination">
    <button
      class="pageButton"
      @click="handlePrevPage"
      :disabled="props.page === 1"
    >
      1
    </button>
    <button
      class="pageButton"
      @click="handleNextPage"
      :disabled="props.page === props.total_pages"
    >
      2
    </button>
  </section>
</template>
<style scoped>
#pagination {
  display: flex;
  gap: 2em;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    width: 20%;
  }

  .pageButton {
    cursor: pointer;
    border: solid rgb(215, 215, 215) 1px;
    padding: 1em;
    display: inline-block;
    padding: 0.75em 1.5em;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 0.5em;
    transition: background-color 0.3s transform 0.2s ease;
  }

  .pageButton:hover {
    border-color: #5333ed;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>
