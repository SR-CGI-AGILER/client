import GoogleAdapter from './google'
// import { Session } from 'inspector';
 
export default GoogleAdapter.extend({
    namespace: 'oauth2/v2',
    pathForType() {
        // console.log(this.headers)
        debugger
        return 'userinfo'
    } 
});
