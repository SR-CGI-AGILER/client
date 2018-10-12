import Controller from '@ember/controller';

export default Controller.extend({
<<<<<<< HEAD
  newCard: [],

  actions: {
    addCard() {
      if (this.getProperties('name2').name2) {
        let newProject = {
            id: Math.random(Math.floor(100000)),
          projectName: this.getProperties('name2').name2
=======
    newCard: [
            
        ],
    
    actions: {
        addCard() {
            if(this.getProperties('name2').name2){
                let newProject = {
                    projectName: this.getProperties('name2').name2
                }
                this.newCard.pushObject(newProject);
            }            
        },
        deleteCard(topping) {
            this.newCard.removeObject(topping);
>>>>>>> c35f69aa0d9780e2aed7569d7a9c09e2cee03c8c
        }
        this.newCard.pushObject(newProject);
        let createActivity = this.store.createRecord('activity', {
            id: newProject.id,
          projectName: newProject.projectName

        })
        createActivity.save();
      }
    },
    deleteCard(topping) {
        console.log(topping)
        this.store.findRecord('activity', topping.id).then(data => {
            data.set('archiveProject',"true")
            this.newCard.removeObject(topping);
        })
    }
  }
});
