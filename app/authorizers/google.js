import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';
import {inject as service} from '@ember/service';
import {isPresent} from '@ember/utils';
export default OAuth2Bearer.extend({
    session: service(),
    authorize(xhr){
        // console.log(this.get('session'));
        debugger
        let access_token = this.get('session').get('data.authenticated');
        // console.log(access_token);
        if(isPresent(access_token)){
            //xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
            // this.set('headers');
            // this.get('headers').set("Authorization", `Bearer ${access_token}`)
            debugger
            this.get('session').set('headers',"Authorization", `Bearer ${access_token}`);
        };
    }
});