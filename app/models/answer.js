import DS from 'ember-data';

export default DS.Model.extend({
    authorAnswer: DS.attr(),
    contentAnswer: DS.attr(),
    question: DS.belongsTo('question', { async: true }),
});
