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
<style lang="scss" scoped>
#pagination {
  display: flex;
  gap: 2em;
  justify-content: center;
  padding: 2em;

  @include desktop {
    width: 20%;
  }

  .pageButton {
    @include primaryButton;
  }

  .pageButton:hover {
    @include primaryButtonHover;
  }
}
</style>
