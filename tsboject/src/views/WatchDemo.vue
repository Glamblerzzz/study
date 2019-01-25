<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <div>{{item}}</div>
        </div>
        <div v-if="watchShow">{{watchTest}}</div>
        <input type="checkbox" :checked="checked" @change="changed"/>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch, Model } from 'vue-property-decorator';
@Component({
    name: 'WatchDemo',
})
export default class WatchDemo extends Vue {
    private watchTest: number = 0;
    private watchShow: boolean = true;
    @Prop() private list!: string[];
    @Model('change') private checked!: boolean;
    private changed(e: any) {
    this.$emit('change', e.target.checked);
  }
    @Watch('watchTest')
    private onWatchTestChanged(newVal: number, oldVal: number) {
        this.watchShow = !this.watchShow;
    }
    private mounted() {
        setInterval(() => {
            ++this.watchTest;
        }, 1000);
    }

}
</script>
<style lang="scss" scoped>

</style>
