import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | activity/myactivity', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:activity/myactivity');
    assert.ok(route);
  });
});
