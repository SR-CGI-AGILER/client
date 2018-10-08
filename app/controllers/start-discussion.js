import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        goToDiscussion(topic){
            this.transitionToRoute('discuss');
        }
    }
});
