import Controller from '@ember/controller';

export default Controller.extend({
    queryParams : ["modelName"],
  modelName: null, 
  newTask: [],

  actions: {
    addTask(topping) {
      if (this.getProperties('name2').name2) {
        // let createTask = {
        //     // id: Math.random(Math.floor(100000)),
        //   text: this.getProperties('name2').name2
        // }
        // this.newTask.pushObject(createTask);
        // this.store.findRecord('activity', topping.id).then(data => {
        //     // id: newProject.id,
        // data.task.text = createTask.text
        // data.save();
        // console.log(data.get('task'))
        // })
    
        let createTask = {
            // id: Math.random(100*Math.floor(100000)),
          text: this.getProperties('name2').name2
        }

        // this.newTask.pushObject(createTask)
        // this.store.findRecord('activity', topping.id).then(data => {
        //     // console.log(data.get('task').pushObject(createTask))
        //     // data.task.pushObject(createTask)
        //     // data.save();
        //     console.log(createTask)
        //     let newTask = this.store.createRecord('task', createTask).then(x => {

        //         data.save();
        //     });

        // this.store.createRecord('task', {
        //     activity: createTask
        // }).save();

        // let task = this.store.createRecord('task', createTask);
        // let activity = this.store.peekRecord('activity', topping.id)
        // activity.get('task').pushObject(task);
        // console.log(activity.get('task').pushObject(task))
        // task.save().then(function() {
        //     activity.save()
        // })
            // data.get('task').pushObject(newTask)
         this.store.findRecord('activity', topping.id).then(data => {
            //  data.get('task').addObject(this.store.createRecord('task', createTask))
                // let task = this.store.createRecord('task', createTask);
                // task.save()
                // data.get('task').pushObjects(task)
            //  console.log(data.get('task'), "Aasdasdadsasdasdasdas")
            //  data.commit()
            // this.store.findRecord('activity', topping.id).then(data => {

            // })
            data.get('task').pushObject(createTask);
            data.save()
            this.newTask.pushObject(createTask)
             
         })

        // })
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
