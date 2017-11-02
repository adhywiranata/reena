import axios from 'axios';
// import Config from 'react-native-config'; // use this if you need any api keys

export const fetchExampleNews = () => (
  axios.get('https://hn.algolia.com/api/v1/search?query=react')
);

export const fetchExampleNews2 = () => (
  axios.get('https://hn.algolia.com/api/v1/search?query=facebook')
);
