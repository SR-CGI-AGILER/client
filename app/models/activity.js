import DS from 'ember-data';
// import task from './task';

 const {attr} = DS;
export default DS.Model.extend({
    projectName : attr('string'),
    archiveProject : attr('boolean'),
    task: attr()
});
