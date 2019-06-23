<template>
  <div id="loginModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" style="z-index=100000;" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row m-0 justify-content-center py-5">
            <div class="col-10 mb-3">
              <input
                v-model="user.userName"
                class="form-control form-control-lg"
                type="text"
                :placeholder="$t('Login.userName')"
              >
            </div>
            <div class="col-10 mb-3">
              <input
                v-model="user.password"
                class="form-control form-control-lg"
                type="password"
                :placeholder="$t('Login.password')"
              >
            </div>
            <div class="col-10 mb-3">
              <button
                type="button"
                @click="loginUser"
                class="btn btn-primary btn-lg"
              >{{$t('Login.submit')}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  data() {
    return {
      user: {
        userName: "",
        password: ""
      }
    };
  },
  computed: {},
  props: {},
  watch: {},
  methods: {
    loginUser() {
      this.$store.dispatch("loginUser", this.user).then(() => {
        $("#loginModal").modal("hide");
      });
    }
  },
  components: {},
  created() {},
  mounted() {}
};
</script>


