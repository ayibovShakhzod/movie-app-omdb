import axios from 'axios';
import { execute } from '.';
import CONST from '../constants';

export default {
  searchMovies: (value) => execute(axios.get(`https://www.omdbapi.com/?s=${value}&apikey=${CONST.API_KEY}`)),
  getMovie: (value) => execute(axios.get(`https://www.omdbapi.com/?i=${value}&apikey=${CONST.API_KEY}`))
};
