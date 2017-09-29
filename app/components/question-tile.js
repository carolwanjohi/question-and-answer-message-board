import Ember from 'ember';

export default Ember.Component.extend({
    questionCart: Ember.inject.service(),

    actions: {
        addToQuestionCart(question) {
            this.get('questionCart').add(question);
        }
    }
});
