// @flow
import { observable, transaction } from 'mobx';

class Store {
  @observable windowSize = {
    width: 0,
    height: 0
  }
  onResize = ({windowHeight, windowWidth}: {windowWidth: number, windowHeight: number}) => {
    transaction(() => {
      this.windowSize.width = windowWidth;
      this.windowSize.height = windowHeight;
    });
  }
}

export default new Store();
