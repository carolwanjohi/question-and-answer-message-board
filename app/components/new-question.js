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
                authorQuestion: this.get('authorQuestion') ? this.get('authorQuestion') : "Author Has No Name",
                questionTitle: this.get('questionTitle') ? this.get('questionTitle') : "No Question Provided",
                contentQuestion: this.get('contentQuestion') ? this.get('contentQuestion') : "No Further Detials Provided",
            };
            // Hide the form
            this.set('addNewQuestion', false);

            // Send action to route handler to create and save the new question
            this.sendAction('saveQuestion', params);
        },
    }
});
