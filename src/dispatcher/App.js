var Dispatcher = require('flux').Dispatcher,
    App = new Dispatcher();

App.handleViewAction = function(action) {
  this.dispatch({
    source : 'VIEW_ACTION',
    action : action
  });
}

module.exports = App;