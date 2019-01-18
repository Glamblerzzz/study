<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"  testMsg = "test"/>
    <div>{{alize}}</div>
  </div>
</template>

<script lang="ts">
import { test } from '@/api/test';
import { Component, Vue, Prop } from 'vue-property-decorator';
// import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  // private alize: number = 0;
  // constructor() {
  //   super();
  //   this.alize = this.$store.state.count;
  // }
  private data() {
    return {
      alize: this.$store.state.count
    };
  }
  private created() {
    this.my();
  }
  // 异步处理方案
  private async my() {
    await test({
      id: 22222
    });
    await test({
      id: 3333
    });
  }
  // 测试
  private name(): string {
    return 'aaaaa';
  }
}
</script>
