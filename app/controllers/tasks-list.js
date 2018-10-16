import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        joinButtonPressed() {
            Ember.$.ajax({
                type: "POST",
                url: 'http://localhost:3000/chat-room/myroom',
                data: {}
            });
            this.transitionToRoute('discuss')
        }
        
    }
});
