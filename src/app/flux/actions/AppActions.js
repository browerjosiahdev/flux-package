import Dispatcher from '../Dispatcher';
import AppConstants from '../constants/AppConstants';

export default {
  clearError: () => {
    Dispatcher.dispatch({
      type: AppConstants.CLEAR_ERROR
    });
  }
};
