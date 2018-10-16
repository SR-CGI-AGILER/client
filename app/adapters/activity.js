import DS from 'ember-data';
import Em from 'ember';


export default DS.RESTAdapter.extend({
	//making a server call to trending
	
	
	buildURL(modelName, id, snapshot, requestType, query){
		
		return `http://localhost:4040/api/v1/project`;
    },
    createRecord(store, type, snapshot) {
        let data = this.serialize(snapshot);

        return new Promise((resolve) => {
            Em.$.ajax({
                async: true,
                crossDomain: true,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                url: `http://localhost:4040/api/v1/project`,
                success: {
                    200: ()=>{
                        Em.run(null, resolve);
                    }
                }
            })
        })
    },
    updateRecord(store, type, snapshot) {
        let data = this.serialize(snapshot);
        console.log(snapshot.id, "this is the id that u need to pass to the backend server so that the u can query the mongoDb and should be able to update the perticular recorrd")
        console.log(data)
        
        return new Promise((resolve) => {
            Em.$.ajax({
                async: true,
                crossDomain: true,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(data.task[data.task.length -1]),
                url: `http://localhost:4040/api/v1/project/${snapshot.id}/tasks`,
                success: {
                    200: ()=>{
                        Em.run(null, resolve);
                    }
                }
            })
        })
    }
   
});
