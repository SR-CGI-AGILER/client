import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | start-discussion', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:start-discussion');
    assert.ok(route);
  });
});
