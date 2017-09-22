import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            questions: this.store.findAll('question'),
            answers: this.store.findAll('answer')
        });
  }, 
    actions: {
        // Create and save the new question
        saveQuestion(params) {
            // Create a new question object with params gotten from the form
            var newQuestion = this.store.createRecord('question', params);
            // Save the new question in the database
            newQuestion.save();
            // Reload the index page
            this.transitionTo('index');
        },
    }
});
