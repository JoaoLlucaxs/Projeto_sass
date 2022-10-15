import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ranekapi.origamid.dev/json/api/produto'
});

export default instance;