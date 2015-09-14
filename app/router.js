import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pages', {path: '/'}, function() {
    this.route('about');
    this.route('contact');
    this.route('portofolio');
  });
});

export default Router;
