import { Dispatcher } from 'flux';

App = new Dispatcher();

App.handleViewAction = function(action) {
  this.dispatch({
    source : 'VIEW_ACTION',
    action : action
  });
}

export default App;