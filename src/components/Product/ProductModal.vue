<template>
  <div id="ProductModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <p>{{product}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  computed: {},
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  watch: {},
  methods: {
    openModal() {
      $("#ProductModal").modal("show");
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