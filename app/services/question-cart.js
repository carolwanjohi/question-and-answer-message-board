import Ember from 'ember';

export default Ember.Service.extend({
    // Empty array to store favorite questions
    questions: [],

    // Push new question to questions array
    add(question) {
        this.get('questions').pushObject(question);
    }

});
