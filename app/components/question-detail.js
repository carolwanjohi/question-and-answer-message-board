import Ember from 'ember';

export default Ember.Component.extend({

    heading: Ember.computed('question.questionTitle', 'question.authorQuestion', function() {
        return this.get('question.questionTitle') + ' by ' + this.get('question.authorQuestion');
    }),

    answersCount: Ember.computed('question.answers.length', function() {
        return this.get('question.answers.length') + ' answers'
    })
});
