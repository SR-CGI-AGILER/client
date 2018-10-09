import Controller from '@ember/controller';

export default Controller.extend({
    
    actions: {
        login() {
            let user = this.getProperties('username');
            localStorage.setItem("username","Ruchik");
            if(user.username === localStorage.getItem("username")){
                this.transitionToRoute('activity');
            }
            else{
                this.transitionToRoute('create-team');
            }
        }
    }
});
