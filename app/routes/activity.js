import Route from '@ember/routing/route';

export default Route.extend({
    model(){
      
        return this.store.findAll('activity')
    },
        beforeModel(){
            this.replaceWith('activity.myactivity');
        },
        
 
    actions: {
        noop() {

        }
    }
  

});
