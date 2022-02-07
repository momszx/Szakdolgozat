import axios from 'axios';

const axiosBase = axios.create({
    baseURL: 'http://localhost:44388'
});

export default axiosBase;