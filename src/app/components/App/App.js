import React, {Component} from 'react';
import styles from './App.css';
import AppActions from '../../flux/actions/AppActions';
import AppStore from '../../flux/stores/AppStore';
import AppConstants from '../../flux/constants/AppConstants';

class App extends Component {
  clearError () {
    AppActions.clearError();
  }
  componentDidMount () {
    this.onAppStoreChange = this.handleAppStoreChange.bind(this);

    AppStore.addChangeListener(this.onAppStoreChange);
  }
  constructor (props) {
    super(props);

    this.state = {
      error: AppStore.getError()
    };
  }
  handleAppStoreChange () {
    this.setState({
      error: AppStore.getError()
    });
  }
  render () {
    return <h1>You are up and running!</h1>;
  }
}

export default App;
