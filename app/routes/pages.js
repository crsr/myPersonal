import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

export default Ember.Route.extend({  
    model() {
        let todos = [
            {
                title: "Learn Ember",
                complete: false,
            },
            {
                title: "Solve World Hunger",
                complete: false,
            }
        ];
        return todos;
    }
});
