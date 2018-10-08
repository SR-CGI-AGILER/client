import Component from '@ember/component';

export default Component.extend({
    actions: {
        goToDiscussion(){
            this.transitionToRoute('discuss');
        }
    }
});
