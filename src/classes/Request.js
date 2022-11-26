import axios from "axios";

class Request {
  constructor() {
    this.host = `https://jsonplaceholder.typicode.com`;
  }

  GetPosts() {
    return axios.get(`${this.host}/posts`);
  }

  GetComments() {}

  GetUsers() {}

  UserDetails() {}
}

export default new Request();
