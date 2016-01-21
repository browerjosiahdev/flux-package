import Store from './Store';
import Dispatcher from '../Dispatcher';
import AppConstants from '../constants/AppConstants';
import AppActions from '../actions/AppActions';

class AppStore extends Store {
  constructor () {
    super();

    this.error;
  }
  getError () {
    return this.error;
  }
  handleAction (action) {
    switch (action.type) {
      case AppConstants.CLEAR_ERROR: {
        this.error = undefined;

        break;
      }
    }

    this.emitChange();
  }
}

const instance = new AppStore();
instance.dispatchToken = Dispatcher.register(instance.handleAction.bind(instance));

export default instance;
