import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | multiform/create-team', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:multiform/create-team');
    assert.ok(route);
  });
});
