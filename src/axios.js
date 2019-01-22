import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hr-helper-db38e.firebaseio.com/'
});

export default instance;