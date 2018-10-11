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
    }
});
