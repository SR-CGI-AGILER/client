import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
// import TokenAuthorizerMixin from 'ember-simple-auth-token/addon/mixins/token-authorizer';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils'

export default DS.RESTAdapter.extend(DataAdapterMixin, {
    
    authorizer: 'authorizer:google',
    host: 'https://www.googleapis.com',
    session: Ember.inject.service('session')
    
});
