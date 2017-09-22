import DS from 'ember-data';

export default DS.Model.extend({
    question: DS.attr();
    authorQuestion: DS.attr();
    contentQuestion: DS.attr();
});
