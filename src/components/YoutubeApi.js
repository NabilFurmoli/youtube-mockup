import axios from 'axios';

const KEY = 'AIzaSyC7xeO1EZrWeQM_08zo8zu72jkFP9AO1cc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});
