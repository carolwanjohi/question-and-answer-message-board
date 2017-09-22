import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('question', params.question_id);
    },

    actions: {
        // Edit an existing question
        edit(question, params) {

            // Get the use input and loop through it
            Object.keys(params).forEach(function(key) {
                // If the user has changed any detail replace the old infomation with the new information
                if(params[key]!==undefined) {
                question.set(key,params[key]);
                }
            });

            // Save the new changes
            question.save();

            // Reload the question page
            this.transitionTo('question', question);

        }
    }
});
