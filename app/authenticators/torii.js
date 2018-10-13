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
    authenticate(provider, options){
        return this.get('torii').open(provider, options)
        
            .then((authResponse)=>{
            
            return new RSVP.Promise((resolve,reject)=>{
                return $.ajax('http://localhost:8000/auth/api/google',{
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