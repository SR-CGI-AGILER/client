import Controller from '@ember/controller';

export default Controller.extend({
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
