import { Component, Vue } from 'vue-property-decorator';
import './test.scss';
@Component({
  components: {
    Test
  },
  template: require('./test.html')
})
export default class Test extends Vue {}
