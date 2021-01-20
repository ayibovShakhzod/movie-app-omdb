import axios from 'axios';
import { execute } from '.';

// const BASEURL = 'http://www.omdbapi.com/';

// const Axios = {
//   _instance: null,
//   get instance() {
//     if (!this._instance) {
//       this._instance = axios.create({ BASEURL });
//     }
//     return this._instance;
//   }
// };

export default {
  searchMovies: (value) => execute(axios.get(`http://www.omdbapi.com/?s=${value}&apikey=71cd908b`))
};
