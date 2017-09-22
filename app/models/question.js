import DS from 'ember-data';

export default DS.Model.extend({
    questionTitle: DS.attr(),
    authorQuestion: DS.attr(),
    contentQuestion: DS.attr(),
    answers: DS.hasMany('answer', {async: true})
});
