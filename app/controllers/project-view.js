import Controller from '@ember/controller';

export default Controller.extend({
  newTask: [],

  actions: {
    addTask(topping) {
      if (this.getProperties('name2').name2) {
        let createTask = {
            // id: Math.random(Math.floor(100000)),
          text: this.getProperties('name2').name2
        }
        this.newTask.pushObject(createTask);
        this.store.findRecord('activity', topping.id).then(data => {
            // id: newProject.id,
        data.task.text =createTask.text
        data.save();
        console.log(data)
        })
    
        
      }
    },
    deleteTask(topping) {
       
        // this.store.findRecord('activity', topping.id).then(data => {
            // data.set('archiveProject',"true")
            this.newTask.removeObject(topping);
        
        // })
    }
  }
});
