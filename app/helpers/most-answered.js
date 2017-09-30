import Ember from 'ember';

export function mostAnswered(params) {
    var question = params[0];
    if(question.get('answers').get('length') > 3){
        return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i>');
    }
}

export default Ember.Helper.helper(mostAnswered);
