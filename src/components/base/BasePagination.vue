<template>
  <div>
    <div class="table-pagination">
      <div
        class="pagination-item pagination-first"
        @click="onClickFirstPage"
        :class="{ disabled: isInFirstPage }"
      >
        First
      </div>

      <div
        class="pagination-item pagination-prev"
        @click="onClickPreviousPage"
        :class="{ disabled: isInFirstPage }"
      >
        Previous
      </div>

      <div
        v-for="(page, index) in pages"
        :key="index"
        class="pagination-item pagination-number"
        @click="onClickPage(page.name)"
        :class="{ active : isPageActive(page.name), disabled : isDisabled(page.name) }"
      >
        {{ page.name }}
      </div>

      <div
        class="pagination-item pagination-next"
        @click="onClickNextPage"
        :class="{ disabled: isInLastPage }"
      >
        Next
      </div>

      <div
        class="pagination-item pagination-last"
        @click="onClickLastPage"
        :class="{ disabled: isInLastPage }"
      >
        Last
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasePagination",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      return Math.floor((this.currentPage - 1) / this.maxVisibleButtons) * this.maxVisibleButtons + 1;
    },
    endPage() {
      return (Math.floor((this.currentPage - 1) / this.maxVisibleButtons) + 1) * this.maxVisibleButtons;
    },
    pages() {
      const range = [];
      for (let i = this.startPage; i <= this.endPage; i++) {
        range.push({
          name: i,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage == page;
    },
    isDisabled(page) {
        return page > this.totalPages;
    }
  },
};
</script>

<style scoped>
@import url("../../css/base/base-pagination.css");
</style>