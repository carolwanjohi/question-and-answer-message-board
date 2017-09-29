import Ember from 'ember';

export default Ember.Component.extend({

    heading: Ember.computed('question.questionTitle', 'question.authorQuestion', function() {
        return this.get('question.questionTitle') + ' by ' + this.get('question.authorQuestion');
    }),
});
