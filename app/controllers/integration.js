import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        transitionToSlack() {
            alert('Slack Integrated Succesfully');
        },
        transitionToGithub() {
            alert('Github Integrated Succesfully');
        }
    }
});
