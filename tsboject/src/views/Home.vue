<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"  testMsg = "test"/>
    <div>{{count+''+alize}}</div>
    <div @click="change">2222</div>
  </div>
</template>

<script lang="ts">
import { test } from '@/api/test';
import { Component, Vue, Prop } from 'vue-property-decorator';
// import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import store from '@/store';
import { mapState } from 'vuex';

@Component({
  components: {
    HelloWorld
  },
  computed: {
    count() {
      return store.state.count + 1;
    },
  }
  // computed: mapState({
  //   count: (state: any) => state.count,
  // })
})
export default class Home extends Vue {
  private alize: number = 0;
  // constructor() {
  //   super();
  //   this.alize = this.$store.state.count;
  // }
  // private data() {
  //   return {
  //     alize: this.$store.state.count
  //   };
  // }
  private created() {
    this.my();
  }
  // 异步处理方案
  private async my() {
    const aaa = await test({
      id: 222
    });
    const bbb = await test({
      id: 333
    });
  }
  // 测试
  private name(): string {
    return 'aaaaa';
  }
  private change() {
    ++this.alize;
  }
}
</script>
