import DS from 'ember-data';


export default DS.Model.extend({
    text: DS.attr('string') ,
    task: DS.belongsTo('activity', {async: true})
});
