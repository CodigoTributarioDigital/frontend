import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://blooming-cliffs-79592.herokuapp.com/',
});
