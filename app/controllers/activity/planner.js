import Controller from '@ember/controller';

export default Controller.extend({
    newCard: [
            
        ],
    
    actions: {
        addCard() {
            console.log(this.getProperties('name2').name2);
            let newProject = {
                    projectName: this.getProperties('name2').name2
            }
            this.newCard.pushObject(newProject);
            
        }
    }
});
