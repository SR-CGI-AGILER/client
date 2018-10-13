import Controller from '@ember/controller';

export default Controller.extend({
  newCard: [],

  actions: {
    addCard() {
      if (this.getProperties('name2').name2) {
        let newProject = {
            // id: Math.random(Math.floor(100000)),
          projectName: this.getProperties('name2').name2
        }
        this.newCard.pushObject(newProject);
        let createActivity = this.store.createRecord('activity', {
            // id: newProject.id,
          projectName: newProject.projectName
        })
        createActivity.save();
        console.log(createActivity)
      }
    },
    deleteCard(topping) {
        console.log(topping)
       let deleteActivity = this.store.findRecord('activity', topping.id).then(data => {
            data.set('archiveProject',"true")
            this.newCard.removeObject(topping);
        })
        deleteActivity.save()
        console.log(deleteActivity)
    }
  }
});
