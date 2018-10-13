import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
// import TokenAuthorizerMixin from 'ember-simple-auth-token/addon/mixins/token-authorizer';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils'

export default DS.RESTAdapter.extend(DataAdapterMixin, {
    // session: service(),
    // authorize(xhr){
    //     let {access_token} = this.get('sesssion').get('session.data.authenticated');
        
    //     if(isPresent(access_token)){
    //         xhr.setRequestHeader('Authorization', `Bearer ${access_token}`)
    //     };
    // },
    authorizer: 'authorizer:google',
    host: 'https://www.googleapis.com',
    
});
