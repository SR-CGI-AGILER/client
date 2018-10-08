import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | activity/new-plan', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:activity/new-plan');
    assert.ok(route);
  });
});
