import axios from "axios";

export default {
  // Gets all envents
  getUsers: function() {
    return axios.get("/api/home");
  },
  // Gets the event with the given id
  getUser: function(id) {
    return axios.get("/api/home/" + id);
  },
  // Deletes the event with the given id
  deleteUser: function(id) {
    return axios.delete("/api/home/" + id);
  },
  // Saves an event to the database
  saveUser: function(eventData) {
    return axios.post("/api/home", eventData);
  }
};
