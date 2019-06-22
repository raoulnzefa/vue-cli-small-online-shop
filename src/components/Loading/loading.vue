<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="loading absolute" v-show="show">
      <img src="/img/loading.svg" class="loading-img" alt="loading...">
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show: {
      required: true,
      default: false,
      type: Boolean
    }
  }
};
</script>