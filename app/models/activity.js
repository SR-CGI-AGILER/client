import DS from 'ember-data';
<<<<<<< HEAD
 const {attr} = DS;
export default DS.Model.extend({
    projectName : attr('string'),
    archiveProject : attr('boolean')

=======

const { attr } = DS;

export default DS.Model.extend({
    projectId: attr('string'),
    projectName: attr('string'),
    assignTo: attr('string'),
    createdAt: attr('date'),
    status: attr('string'),
    dueDate: attr('date'),
    task: attr('task',{
        taskId: attr('string'),
        text: attr('string'),
        createdAt: attr('date'),
        dueDate: attr('date'),
        status: attr('string'),
        assignTo: attr('string'),
        archiveTask: attr('boolean')
    }),
    archiveProject: attr('string')
>>>>>>> c35f69aa0d9780e2aed7569d7a9c09e2cee03c8c
});
