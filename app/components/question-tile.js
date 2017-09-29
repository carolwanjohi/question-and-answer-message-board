import Ember from 'ember';

export default Ember.Component.extend({

    answersCount: Ember.computed('question.answers.length', function() {
        return this.get('question.answers.length') + ' answers'
    }),

    // Inject the Question Cart Service
    questionCart: Ember.inject.service(),

    actions: {
        // Add a question to the questions array in the Question Cart Service
        addToQuestionCart(question) {
            this.get('questionCart').add(question);
        }
    }
});
