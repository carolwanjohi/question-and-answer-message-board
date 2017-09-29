import DS from 'ember-data';

export default DS.Model.extend({
    questionTitle: DS.attr(),
    authorQuestion: DS.attr(),
    contentQuestion: DS.attr(),
    answers: DS.hasMany('answer', { async: true }),

    // Inject question cart 
    questionCart: Ember.inject.service(),

    // Computed property to check if a question is already in the question cart
    inCart : Ember.computed('questionCart.questions.[]', function() {
        return this.get('questionCart').includes(this);
    })

});
