import axios from 'axios';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:4000/',
  baseURL: 'https://alepbackend.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('sample');
    return response;
  },
  (error) => {
    console.log(error);
    Promise.reject((error.response && error.response.data) || 'Something went wrong');
  }
);

export default axiosInstance;
