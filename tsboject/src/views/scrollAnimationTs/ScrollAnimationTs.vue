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
interface TestType {
    name: string;
    age: number;
}
@Component({
    name: 'ScrollAnimationTs'
})
export default class ScrollAnimationTs extends Vue {
    @Prop() private list!: string[];
    private mylist = this.list;
    private isShow: boolean[] = [];
    private async created() {
        this.mylist = ['aaaa', 'bbbb', 'cccc'];
        for (const iterator of this.mylist) {
            this.isShow.push(iterator === 'aaaa');
        }
        this.action({name: 'aaaa', age: 2, });
        // this.isShow.pop();
    }
    private action(data: TestType): void {
        // console.log(data);
        alert(data.name);
    }
}
</script>
<style lang="scss" scoped>
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
