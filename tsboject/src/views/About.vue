<template>
  <div class="about">
    <h1>This is an about page</h1>
    <scroll-animation-ts :list="['aaa','bbb','ccc']" v-model="checked"></scroll-animation-ts>
  </div>
</template>
<script lang="ts">
import ScrollAnimationTs from '@/views/WatchDemo.vue';
import Vue from 'vue';
export default Vue.extend({
  components: {ScrollAnimationTs},
  data() {
    return {
      list2: {one: 'aaa', two: 'bbb', three: 'ccc'},
      checked: false
    };
  },
  watch: {
    checked: (newVal: number, oldVal: number) => {
      return '2222';
    }
  }

});
</script>