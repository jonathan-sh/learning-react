import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.saas-solinftec.com/cerrado-mineiro/'
});

export default instance