import axios from "axios";

class Request {
  constructor() {
    this.host = `https://jsonplaceholder.typicode.com`;
  }

  GetPosts() {
    return axios.get(`${this.host}/posts`);
  }

  GetComments(postID) {
    return axios.get(`${this.host}/posts/${postID}/comments`);
  }

  GetUsers() {}

  UserDetails() {}
}

export default new Request();
