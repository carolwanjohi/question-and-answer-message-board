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
                // If the user has changed any detail replace the old information with the new information
                if(params[key]!==undefined) {
                question.set(key,params[key]);
                }
            });

            // Save the new changes
            question.save();

            // Reload the index page
            this.transitionTo('index');

        },

        // Create and save an answer for a specified question
        saveAnswer(params) {
            // Create a new answer object with params gotten from the form
            var newAnswer = this.store.createRecord('answer', params);

            // Get the current question and store it
            var question = params.question;

            // Go to the current question, get the answers parameter and store the new answer in the answers object
            question.get('answers').addObject(newAnswer);

            // Save the new answer then save the question with its new answers parameter
            newAnswer.save().then( function() {
                return question.save();
            });

            // Reload the question page
            this.transitionTo('question', question);

        }

    }
});



