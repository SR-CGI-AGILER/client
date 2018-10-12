import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | multiform/invite-members', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:multiform/invite-members');
    assert.ok(route);
  });
});
