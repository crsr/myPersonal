import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let pages = [
            {
                title: "Learn Ember",
                complete: false,
            },
            {
                title: "Solve World Hunger",
                complete: false,
            }
        ];
        return pages;
    }
});
