import Controller from '@ember/controller';

export default Controller.extend({
    queryParams : ["modelName"],
  modelName: null, 
  newTask: [],

  actions: {
    addTask() {
      if (this.getProperties('name2').name2) {
        let newProject = {
            id: Math.random(Math.floor(100000)),
          projectName: this.getProperties('name2').name2
        }
        this.newTask.pushObject(newProject);
        // let createActivity = this.store.createRecord('activity', {
        //     id: newProject.id,
        //   projectName: newProject.projectName

        // // })
        // createActivity.save();
      }
    },
    deleteTask(topping) {
        console.log(topping)
        this.store.findRecord('activity', topping.id).then(data => {
            data.set('archiveProject',"true")
            this.newTask.removeObject(topping);
        })
    },
  }
});
