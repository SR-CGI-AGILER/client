import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('discuss');
<<<<<<< HEAD
  this.route('management');
=======
  this.route('discover-project');
>>>>>>> e4a814644852cc3a7a4268b8410bb40acc9dd44c
});

export default Router;
