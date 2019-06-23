<template>
  <div class="row m-0 mb-4 justify-content-center">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li :class="{'page-item':true,'disabled':currentPage===1}">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="updatePage(currentPage-1)"
          >
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          v-for="page in pagesCount"
          :class="{'page-item':true,'active':currentPage===page}"
          :key="'page-item-'+page"
        >
          <a class="page-link" href="#" @click.prevent="updatePage(page)">{{page}}</a>
        </li>

        <li :class="{'page-item':true,'disabled':currentPage===pagesCount}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="updatePage(currentPage+1)"
          >
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["pagesCount", "currentPage"])
  },
  props: {},
  watch: {},
  methods: {
    updatePage(page) {
      if (page < 1 || page > this.pagesCount) {
        return false;
      }
      this.$emit("changePage", page);
    }
  },
  components: {},
  created() {},
  mounted() {}
};
</script>


/******************* 
*
*
*
*    Ahmed Ali Tahbet
*
*
 ********************/