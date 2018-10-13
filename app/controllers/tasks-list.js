import Controller from '@ember/controller';
import Ember from "ember";

// import { io } from "../components/discuss-chat.js";

export default Controller.extend({
  actions: {
    joinButtonPressed() {
      Ember.$.ajax({
        type: "POST",
        url: `http://localhost:3000/chat-room/myroom`
      });
      // alert('triggered');
      this.transitionToRoute('discuss');
    }
  }
});
