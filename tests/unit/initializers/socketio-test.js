import Ember from 'ember';
import SocketioInitializer from '../../../initializers/socketio';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | socketio', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  SocketioInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
