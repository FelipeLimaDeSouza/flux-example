import { Dispatcher } from 'flux';

AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
  this.dispatch({
    source : 'VIEW_ACTION',
    action : action
  });
}

export default AppDispatcher;