import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('discuss');
  this.route('management');
  this.route('discover-project');
  this.route('dashboard');
  this.route('start-discussion');
  this.route('activity', function() {
    this.route('myactivity');
    this.route('feeds');
    this.route('new-plan');
    this.route('planner');
  });
  this.route('start-discussion');
  this.route('tasks-list')
  this.route('create-team');
  this.route('integration');
});

export default Router;
