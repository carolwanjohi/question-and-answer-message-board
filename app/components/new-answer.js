import Ember from 'ember';

export default Ember.Component.extend({
    // Hide the form
    addNewAnswer: false,

    actions: {
        // Show the form
        showAnswerForm() {
            this.set('addNewAnswer', true);
        },

        saveAnswer() {
            // Get the user input and store them for the current qustion
            var params = {
                authorAnswer: this.get('authorAnswer') ? this.get('authorAnswer') : "Author Has No Name",
                contentAnswer: this.get('contentAnswer') ? this.get('contentAnswer') : "No Answer Provided",
                question: this.get('question')
            };
            // Hide the form
            this.set('addNewAnswer', false);

            // Send action to route handler to create and save the new question
            this.sendAction('saveAnswer', params);
        }
    }
});