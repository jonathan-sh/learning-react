import http from '../util/axios';

const doLogin = (email, password) => {
    return http.post('/login', { email, password })
               .then(it => it.data.token)
               .catch(it => { throw it })

    
}

export default { doLogin }