import Controller from '@ember/controller';
// import ENV from '../../config/environment';
import Ember from 'ember';

import { inject as service } from '@ember/service';

export default Controller.extend({
    session : service('session'),
    actions:{
        authenticateSession(){
            debugger
            let session = this.get('session');
            //console.log ( session.get("data"), "asdklasdlkdkjlsdflkjjsfjkdh")
            session.authenticate('authenticator:torii', 'google-oauth2').then(()=>{
                debugger
                this.store.queryRecord('user', {}).then((user)=>{
                    // console.log(user, "ththththththththt");  
                    session.set('currentUser', user);
                    debugger
                })
            }).catch(err=>{
                console.log(err);
            });
        }
    }
});