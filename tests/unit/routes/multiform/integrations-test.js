import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | multiform/integrations', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:multiform/integrations');
    assert.ok(route);
  });
});
