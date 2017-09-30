import Ember from 'ember';

export default Ember.Component.extend({
    // Hide the form
    addNewQuestion: false,

    actions: {
        // Show the form
        showQuestionForm() {
            this.set('addNewQuestion', true)
        },

        saveQuestion() {
            // Get the user input and store them
            var params = {
                authorQuestion: this.get('authorQuestion') ? this.get('authorQuestion') : "Anonymous",
                questionTitle: this.get('questionTitle') ? this.get('questionTitle') : "No Question Provided",
                contentQuestion: this.get('contentQuestion') ? this.get('contentQuestion') : "No Further Details Provided",
            };
            // Hide the form
            this.set('addNewQuestion', false);
            this.set('authorQuestion', '');
            this.set('questionTitle', '');
            this.set('contentQuestion', '');

            // Send action to route handler to create and save the new question
            this.sendAction('saveQuestion', params);
        },
    }
});
