import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
    // projectId: attr('string'),
    projectName: attr('string'),
    // assignTo: attr('string'),
    // createdAt: attr('date'),
    // status: attr('string'),
    // dueDate: attr('date'),
    // task: attr('task',{
    //     taskId: attr('string'),
    //     text: attr('string'),
    //     createdAt: attr('date'),
    //     dueDate: attr('date'),
    //     status: attr('string'),
    //     assignTo: attr('string'),
    //     archiveTask: attr('boolean')
    // }),
    archiveProject: attr('boolean')
});
