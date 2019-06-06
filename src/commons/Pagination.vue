<template>
  <nav class="pagination-container float-right">
    <Paginate
      v-model="pagePaginate"
      :click-handler="gotoPagePaginate"
      :page-count="pageCountPaginate"
      :page-range="3"
      :margin-pages="2"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-text="prev"
      :prev-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-text="next"
      :next-class="'page-item'"
      :next-link-class="'page-link'"
      :container-class="'pagination margin-bottom-0'"
    ></Paginate>
    <!-- <button
      v-on:click.prevent="showAll"
      type="button"
      class="btn btn-link float-right"
      :class="{ hide:(show == false) }"
    >View All</button> -->
  </nav>
</template>

<script>
/**
 * reff: https://github.com/lokyoung/vuejs-paginate
 */
import Paginate from 'vuejs-paginate';

export default {
  components: {
    Paginate
  },
  props: ['page', 'gotoPage', 'totalRows', 'limit'],
  data() {
    return {
      pagePaginate: this.page,
      prev: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      next: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      show: true
    };
  },
  computed: {
    pageCountPaginate() {
      return this.totalRows > this.limit
        ? Math.ceil(this.totalRows / this.limit)
        : 1;
    }
  },
  methods: {
    gotoPagePaginate(page) {
      return this.gotoPage(page);
    },
    showAll() {
      this.show = false;
      return this.gotoPage(1, 10000);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>