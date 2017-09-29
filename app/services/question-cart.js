import Ember from 'ember';

export default Ember.Service.extend({
    // Empty array to store favorite questions
    questions: [],

    // Push new question to questions array
    add(question) {
        this.get('questions').pushObject(question);
    },

    // Check if a question is already included in the questions array
    includes(question) {
        return this.get('questions').includes(question)
    }

});
