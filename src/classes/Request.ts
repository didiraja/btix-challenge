import axios from "axios";

export type RequestMethod = 'GetPosts' | 'GetComments' | 'GetUsers';

class Request {
  host: string;

  constructor() {
    this.host = `https://jsonplaceholder.typicode.com`;
  }

  GetPosts() {
    return axios.get(`${this.host}/posts`);
  }

  GetComments(id?: number) {
    return axios.get(`${this.host}/posts/${id}/comments`);
  }

  GetUsers() {
    return axios.get(`${this.host}/users/`);
  }

  UserDetails(id?: number) {
    return axios.get(`${this.host}/users/${id}`);
  }
}

export default new Request();
