import {Dispatcher} from 'flux';

  // Singleton dispatcher
const instance = new Dispatcher();

export default instance;
export const dispatch = instance.dispatch.bind(instance);
