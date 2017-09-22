import Ember from 'ember';

export default Ember.Component.extend({
    // Hide edit form
    editQuestionForm: false,

    actions: {
        // Show edit form
        showEditForm() {
            this.set('editQuestionForm', true);
        },

        // Edit action
        edit(question) {
            // Get the user input and store them
            var params = {
                authorQuestion: this.get('authorQuestion'),
                questionTitle: this.get('questionTitle'),
                contentQuestion: this.get('contentQuestion')
            };

            // Hide the form
            this.set('editQuestionForm', false);

            // Send action to route handler to edit and save the editted question
            this.sendAction('edit', question, params)
        }
    }
});
