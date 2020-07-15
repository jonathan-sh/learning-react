import axios from "axios";

const instance = () =>{
    let options = {baseURL: 'http://127.0.0.1:4212/'};
    if(localStorage.getItem('token')){
        options['headers'] =  {'auth': localStorage.getItem('token')};
    }
 
    return axios.create(options);
}

export default instance()