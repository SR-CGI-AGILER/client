import DS from 'ember-data';
<<<<<<< HEAD
import Em from 'ember';

export default DS.RESTAdapter.extend({
    buildURL(){
        return `http://localhost:8000/api/v1/project`
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
                url: `http://localhost:8000/api/v1/project`,
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

        return new Promise((resolve) => {
            Em.$.ajax({
                async: true,
                crossDomain: true,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(data),
                url: `http://localhost:8000/api/v1/project/:projectName`,
                success: {
                    200: ()=>{
                        Em.run(null, resolve);
                    }
                }
            })
        })
    }
});
=======

export default DS.JSONAPIAdapter.extend({
});
>>>>>>> c35f69aa0d9780e2aed7569d7a9c09e2cee03c8c
