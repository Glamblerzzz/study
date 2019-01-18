import { Component, Vue } from 'vue-property-decorator';
import './ScrollAnimation.scss';
@Component({
  components: {
    ScrollAnimation
  },
  template: require('./ScrollAnimation.html')
})
export default class ScrollAnimation extends Vue {
  private lineList: string[] = ['aaa', 'bbb', 'ccc'];
  private mainLine: string = '';
  private created() {
      this.mainLine = this.lineList[0];
  }
  // private mounted() {

  // }
}
