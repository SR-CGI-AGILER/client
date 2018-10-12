import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    payload = payload.data.map(function(e){
        e.id = e._id;
        return e
    })
    
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});