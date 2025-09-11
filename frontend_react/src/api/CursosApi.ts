import axios from 'axios';
import { getEnvVariables } from '../helpers';

const {VITE_API_URL } = getEnvVariables();

const cursosApi = axios.create({
    baseURL: VITE_API_URL
        // baseURL: VITE_LOCAL_URL
});


export default cursosApi;