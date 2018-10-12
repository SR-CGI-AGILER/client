import Controller from '@ember/controller';

export default Controller.extend({
    data: null,
    init(){
        console.log("adasjdhakjsdh")
        this.data = this.store.findAll('activity')
        console.log(this.data)
    }
    
});
