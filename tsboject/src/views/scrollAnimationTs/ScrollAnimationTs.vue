<template>
    <div>
        <div v-for="(item, index) in mylist" :key="index">
            <div :class="`line ${index}`" v-show="isShow[index]" >{{item}}</div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch, Model } from 'vue-property-decorator';
@Component({
    name: 'ScrollAnimationTs'
})
export default class ScrollAnimationTs extends Vue {
    @Prop() private list!: string[];
    private mylist = this.list;
    private isShow: boolean[] = [];
    private created() {
        this.mylist = ['aaaa', 'bbbb', 'cccc'];
        for (const iterator of this.mylist) {
            this.isShow.push(iterator === 'aaaa');
        }
        this.isShow.pop();
    }
}
</script>
<style lang="scss">
$base: #f56;
    .line{
        background-color: $base;
        animation: scrollT 2s ease 0s infinite running;
        // animation: scrollT 5s infinite;
    }
    @keyframes scrollT {
        0% {
            opacity: 0;
        } 
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
</style>
