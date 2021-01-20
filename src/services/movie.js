import axios from 'axios';
import { execute } from '.';

export default {
  searchMovies: (value) => execute(axios.get(`https://www.omdbapi.com/?s=${value}&apikey=71cd908b`))
};
