import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let a = this.store.findAll('activity')
       console.log(a)
        return a
    },
        beforeModel(){
            this.replaceWith('activity.myactivity');
        },
        
 
    actions: {
        noop() {

        }
    }
  

});
