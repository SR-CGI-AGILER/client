import Torii from 'ember-simple-auth/authenticators/torii';
import Ember from 'ember';
const {
    RSVP,
    inject: {service}
} = Ember;

// Torii.reopen({
//     restore: (data)=>{
//         var resolveData = data || {};
//         this.provider = resolveData.provider;
//         return new RSVP.Promise((resolve)=>{resolve(resolveData);});
//     }
// })

export default Torii.extend({
    torii: service('torii'),
    session: service('session'),
    authenticate(provider, options){
        debugger
        return this.get('torii').open(provider, options)
            
            .then((authResponse)=>{
            debugger
            return new RSVP.Promise((resolve,reject)=>{
                debugger
                return $.ajax('http://localhost:4000/login',{
                    
                    type: 'POST',
                    data:{
                        code: authResponse.authorizationCode,
                        redirect_uri: authResponse.redirectUri
                    },
                    success: resolve,
                    error: reject
                });
            });
        });
    }
    // open: function() {
    //     return this._super().then(function(auth){
    //         return Ember.$.ajax({
    //             type: 'POST',
    //             url: 'http://localhost:8000/auth/api/google',
    //             data: {
    //                 code: authResponse.authorizationCode,
    //                 redirect_uri: authResponse.redirectUri    
    //             }
    //         })
    //     })
    // }
});